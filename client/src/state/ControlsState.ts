import { action, observable } from "mobx";
import { ControlsState, ToggleControl } from "client/state";

class ToggleControlClass {

    constructor(title: string, value: boolean = false) {
        this.title = title;
        this.value = value;
        this.setValue = this.setValue.bind(this);
        this.setBroadcast = this.setBroadcast.bind(this);
    }

    public title = "";

    @observable
    public value = false;

    @observable
    public broadcast = false;

    @action("update control value")
    public setValue(value: boolean) {
        this.value = value;
    }

    @action("update broadcast value")
    public setBroadcast(broadcast: boolean) {
        this.broadcast = broadcast;
    }
}

export const controlsState = observable.map<keyof ControlsState, ToggleControl>({
    "mainLight": new ToggleControlClass("Main light"),
    "additionalLight": new ToggleControlClass("Additional light"),
    "mainCooler": new ToggleControlClass("Main cooler"),
});
