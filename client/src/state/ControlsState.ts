import { action, observable } from "mobx";
import { ControlsState, ToggleControl } from "client/state";

class ToggleControlClass {

    constructor(title: string, value: boolean = false) {
        this.title = title;
        this.value = value;
        this.setValue = this.setValue.bind(this);
    }

    public title = "";

    @observable
    public value = false;

    @action("update control value")
    public setValue(value: boolean) {
        this.value = value;
    }
}

export const controlsState = observable.map<keyof ControlsState, ToggleControl>({
    "mainLight": new ToggleControlClass("Main light"),
    "additionalLight": new ToggleControlClass("Additional light"),
    "mainCooler": new ToggleControlClass("Main cooler"),
});
