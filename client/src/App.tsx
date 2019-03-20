import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "./components/Toggle";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-header-text">Home Server Pi</p>
                </header>
                <main className="App-main">
                    <Toggle enabled={false} title="Main light" />
                    <Toggle enabled={false} title="Additional light" />
                    <Toggle enabled={false} title="Main cooler" />
                </main>
            </div>
        );
    }
}

export default App;
