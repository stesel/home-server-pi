import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ControlList } from "./components/controlList/ControlList";
import DevTools from "mobx-react-devtools";
import { Provider } from "mobx-react";
import { controlsState } from "./state/controlsState";

export class App extends React.Component {

    public render() {
        return (
            <Provider controlsState={controlsState}>
                <div className="App">
                    {process.env.NODE_ENV === "development" && <DevTools />}
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className="App-header-text">Home Server Pi</p>
                    </header>
                    <main className="App-main">
                        <ControlList />
                    </main>
                </div>
            </Provider>
        );
    }

    public shouldComponentUpdate() {
        return false;
    }
}
