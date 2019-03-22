import { observable } from "mobx";
import { ControlsState, ToggleControl } from "client/state";

const toggleControl = observable<ToggleControl>({
    value: false,
    title: "Main Light",
    setValue: function(value: boolean) {
        this.value = value;
    },
});

export const controlsState = observable.map<keyof ControlsState, ToggleControl>({
    "mainLight": toggleControl,
});
