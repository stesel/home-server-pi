import { Store } from "client/state";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Toggle } from "../toggle/Toggle";

export type ControlListProps = Store["controlsState"];

const stateToProps = (state: Store) => {
    return state.controlsState;
};

export const ControlList: React.SFC<{}> = inject<
    Store,
    ControlListProps,
    ControlListProps,
    ControlListProps
>(stateToProps)(observer(controlsState => {
    return (
        <section className="control-list">
            {Array.from(controlsState.keys()).map(key => {
                return (<Toggle {...controlsState.get(key)!} key={key} />);
            })}
        </section>
    );
}));
