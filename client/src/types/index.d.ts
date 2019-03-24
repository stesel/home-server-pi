declare module "client/state" {

    import { ObservableMap } from "mobx";

    export type ToggleControl = {
        value: boolean;
        title: string;
        setValue: (value: boolean) => void;
    };

    export type ControlsState = {
        mainLight: TogglleControl;
        additionalLight: ToggleControl;
        mainCooler: ToggleControl;
    };

    export type State = {
        controlsState: ControlsState;
    };

    export type Store = {
        controlsState: ObservableMap<keyof ControlsState, ToggleControl>;
    }

}
