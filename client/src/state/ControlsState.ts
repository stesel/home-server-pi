import { observable } from "mobx";
import { IControlsState } from "../interfaces/IControlsState";

export const ControlsState: IControlsState = observable({
    mainLight: false,
    additionalLight: false,
    mainCooler: false,
});  implements IControlsState {

    public getMainLight() {
        return this.mainLight;
    }

    public getAdditionalLight() {
        return this.additionalLight;
    }

    public getMainCooler() {
        return this.mainCooler;
    }

    public setMainLight(value: boolean) {
        this.mainLight = value;
    }

    public setAdditionalLight(value: boolean) {
        this.additionalLight = value;
    }

    public setMainCooler(value: boolean) {
        this.mainCooler = value;
    }

}
