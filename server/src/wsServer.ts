import * as WebSocket from "ws";
import { Server } from "http";
import { ServerMessage, ControlsStateMessage } from "shared/ws";

const getControlsStateMessage = (): ControlsStateMessage => {
    return {
        type: "hsp.controlsState",
        args: {
            mainLight: true,
            additionalLight: false,
            mainCooler: true,
        }
    };
};

const sendToWS = (ws: WebSocket, message: ServerMessage) => {
    ws.send(JSON.stringify(message));
};

export const registerWSServer = (server: Server) => {
    const wss = new WebSocket.Server({
        server: server,
    });

    wss.on("connection", (ws: WebSocket) => {
        console.log("WS client is connected");
        sendToWS(ws, getControlsStateMessage());
        ws.on("message", (message: string) => {
            console.log("WS messagge", message);
        });
    });

};
