declare module "client/state" {

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

}
