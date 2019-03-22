import * as React from "react";
import { ObservableMap } from "mobx";
import { observer } from "mobx-react";
import { Toggle } from "../toggle/Toggle";
import { ControlsState, ToggleControl } from "client/state";

export interface ControlListProps {
    state: ObservableMap<keyof ControlsState, ToggleControl >;
}

export const ControlList: React.SFC<ControlListProps> = observer((props: ControlListProps) => {
    const mainLight = props.state.get("mainLight")!;
    return (
        <section className="control-list">
            <Toggle
                {...mainLight}
                title="Main light"
            />
            <Toggle
                {...mainLight}
                title="Additional light"
            />
            <Toggle
                {...mainLight}
                title="Main cooler"
            />
        </section>
    );
});
