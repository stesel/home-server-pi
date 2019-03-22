export interface IControlsState {

    mainLight: boolean;
    additionalLight: boolean;
    mainCooler: boolean;

    setMainLight: (value: boolean) => void;
    setAdditionalLight: (value: boolean) => void;
    setMainCooler: (value: boolean) => void;

}
