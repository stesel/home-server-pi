import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ControlList } from "./components/controlList/ControlList";
import DevTools from "mobx-react-devtools";
import { controlsState } from "./state/controlsState";

class App extends Component {
    render() {
        return (
            <div className="App">
                {process.env.NODE_ENV === "development" && <DevTools />}
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-header-text">Home Server Pi</p>
                </header>
                <main className="App-main">
                    <ControlList state={controlsState} />
                </main>
            </div>
        );
    }
}

export default App;
