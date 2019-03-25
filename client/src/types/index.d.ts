declare module "client/state" {

    import { ObservableMap } from "mobx";

    export interface ToggleControl {
        value: boolean;
        title: string;
        setValue: (value: boolean) => void;
    }

    export interface ControlsState {
        mainLight: TogglleControl;
        additionalLight: ToggleControl;
        mainCooler: ToggleControl;
    }

    export interface State {
        controlsState: ControlsState;
    }

    export interface Store {
        controlsState: ObservableMap<keyof ControlsState, ToggleControl>;
    }

}
