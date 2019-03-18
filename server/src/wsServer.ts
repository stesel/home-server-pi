import * as WebSocket from "ws";
import * as http from "http";

export const registerWSServer = (server: http.Server) => {
    const wss = new WebSocket.Server({
        server: server,
    });

    wss.on("connection", (ws: WebSocket) => {
        console.log("WS client is connected");
        ws.send("Connected to WS server");
        ws.on("message", (message: string) => {
            console.log("WS messagge", message);
        });
    });

};
