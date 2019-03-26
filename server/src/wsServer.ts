import * as WebSocket from "ws";
import { Server } from "http";
import { autorun, transaction } from "mobx";
import {
    ServerMessage,
    ControlsStateMessage,
    ClientMessage,
    ControlChangedMessage,
 } from "shared/ws";
import { ControlType } from "shared/state";
import { controlsState } from "./state/controlsState";

type MessageHandler = (message: ClientMessage) => void;

type MessageHandlerMap = Readonly<{
    [K in ClientMessage["type"]]: MessageHandler;
}>;

const changeContrlosHandler: MessageHandler = message => {
    const changes = message.args;
    transaction(() => {
        Object.keys(changes).forEach((key: ControlType) => {
            const control = controlsState.get(key);
            control.setBroadcast(true);
            control.setValue(changes[key]);
        });
    });
};

const messageHandlerMap: MessageHandlerMap = {
    "hsp.changeControl": changeContrlosHandler,
};

const parseWSData = (data: string) => {
    try {
        const message: ClientMessage = JSON.parse(data);
        messageHandlerMap[message.type](message);
    }
    catch (e) {
        console.warn("WS DATA ERROR: ", e);
    }
};

const sendToWS = (ws: WebSocket, message: ServerMessage) => {
    ws.send(JSON.stringify(message));
};

const getControlsStateMessage = (): ControlsStateMessage => {
    const args = Array.from(controlsState.keys()).reduce((result, key: ControlType) => {
        result[key] = controlsState.get(key)!.value;
        return result;
    }, {} as ControlsStateMessage["args"]);
    return {
        type: "hsp.controlsState",
        args: args,
    };
};

export const registerWSServer = (server: Server) => {
    const wss = new WebSocket.Server({
        server: server,
    });

    wss.on("connection", (ws: WebSocket) => {
        console.log("WS client is connected");
        sendToWS(ws, getControlsStateMessage());
        ws.on("message", (message: string) => {
            parseWSData(message);
        });
    });

    autorun(() => {
        const broadcastKeys = Array.from(
            controlsState.keys(),
        ).filter(key => {
            return controlsState.get(key)!.broadcast;
        });

        if (broadcastKeys.length === 0) {
            return;
        }

        transaction(() => {
            broadcastKeys.forEach(key => {
                controlsState.get(key)!.setBroadcast(false);
            });
        });

        const args = broadcastKeys.reduce((result, key: ControlType) => {
            result[key] = controlsState.get(key)!.value;
            return result;
        }, {} as ControlChangedMessage["args"]);

        const message: ControlChangedMessage = {
            type: "hsp.controlChanged",
            args: args,
        };

        wss.clients.forEach((ws: WebSocket) => {
            sendToWS(ws, message);
        });
    });

};
