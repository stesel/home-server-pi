import * as WebSocket from "ws";
import { Server } from "http";

export const registerWSServer = (server: Server) => {
    const wss = new WebSocket.Server({
        server: server,
    });

    wss.on("connection", (ws: WebSocket) => {
        console.log("WS client is connected");
        ws.send(JSON.stringify({
            type: "hsp.controlsState",
            args: {
                mainLight: true,
                additionalLight: false,
                mainCooler: true,
            }
        }));
        ws.on("message", (message: string) => {
            console.log("WS messagge", message);
        });
    });

};
