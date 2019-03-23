import { ControlType } from "shared/state";
import { ServerMessage } from "shared/ws";
import { controlsState } from "./state/controlsState";

type MessageHandler = (message: ServerMessage) => void;

type MessageHandlerMap = Readonly<{
    [K in ServerMessage["type"]]: MessageHandler;
}>;

const controlsChangedHandler: MessageHandler = message => {
    (Object.keys(message.args) as ControlType[]).forEach(key => {
        controlsState.get(key)!.setValue(message.args[key]!);
    });
}

const messageHandlerMap: MessageHandlerMap = {
    "hsp.controlsState": controlsChangedHandler,
    "hsp.controlChanged": controlsChangedHandler,
};

const parseWSData = (data: string) => {
    try {
        const message: ServerMessage = JSON.parse(data);
        messageHandlerMap[message.type](message);
    }
    catch (e) {
        console.warn("WS DATA ERROR: ", e);
    }
};

export const registerWS = () => {
    const ws = new WebSocket(`ws://${window.location.host}`);
    ws.onopen = (event) => {
        console.log("WS OPENED: ", event);
    };
    ws.onclose = (event) => {
        console.log("WS CLOSED: ", event);
    };
    ws.onerror = (event) => {
        console.log("WS ERROR: ", event);
    };
    ws.onmessage = (event: MessageEvent) => {
        console.log("WS DATA: ", event.data);
        parseWSData(event.data);
    };
};
