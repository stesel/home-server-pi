import express from "express";
import * as http from "http";
import { env } from "./env";
import { registerWSServer } from "./wsServer";

const app = express();

const server = http.createServer(app);

app.use(express.static("../client/build"));
app.set("port", process.env.PORT || 3000);
app.get("/env", env);

registerWSServer(server);

server.listen(app.get("port"), () => {
    console.log(
        `App is running at port: ${app.get("port")}, mode: ${app.get("env")}`,
    );
});
