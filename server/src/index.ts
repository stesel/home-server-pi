import express from "express";
import { env } from "./env"

const app = express();

app.use(express.static('../client/build'));
app.set("port", process.env.PORT || 3000);

app.get("/env", env);

app.listen(app.get("port"), () => {
    console.log(
        "App is running at http://localhost in %s mode",
        app.get("port"), app.get("env"),
    );
});
