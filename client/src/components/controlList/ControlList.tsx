import * as React from "react";
import { ObservableMap } from "mobx";
import { observer } from "mobx-react";
import { Toggle } from "../toggle/Toggle";
import { ControlsState, ToggleControl } from "client/state";

export interface ControlListProps {
    state: ObservableMap<keyof ControlsState, ToggleControl >;
}

export const ControlList = observer<React.SFC<ControlListProps>>(({ state }) => {
    return (
        <section className="control-list">
            {Array.from(state.keys()).map(key => {
                return (<Toggle {...state.get(key)!} key={key} />)
            })}
        </section>
    );
});
