import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { registerWS } from "./wsClient";
import { userAuthentication } from "./loginService";

userAuthentication()
    .then(success => {
        console.log("success", success);
        if (success) {
            ReactDOM.render(<App />, document.getElementById("root"));
            registerWS();
        }
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
