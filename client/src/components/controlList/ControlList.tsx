import * as React from "react";
import { observer } from "mobx-react";
import { Toggle } from "../toggle/Toggle";
import { IControlsState } from "../../interfaces/IControlsState";

export interface ControlListProps {
    state: IControlsState;
}

export const ControlList: React.SFC<ControlListProps> = observer((props: ControlListProps) => {
    const { state } = props;
    return (
        <section className="control-list">
            <Toggle
                enabled={state.getMainLight()}
                setValue={state.setMainLight}
                title="Main light"
            />
            <Toggle
                enabled={state.getAdditionalLight()}
                setValue={state.setAdditionalLight}
                title="Additional light"
            />
            <Toggle
                enabled={state.getMainCooler()}
                setValue={state.setMainCooler}
                title="Main cooler"
            />
        </section>
    );
});
