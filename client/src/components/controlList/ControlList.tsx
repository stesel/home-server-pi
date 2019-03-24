import * as React from "react";
import { inject, observer } from "mobx-react";
import { Toggle } from "../toggle/Toggle";
import { Store } from "client/state";

export type ControlListProps = Store["controlsState"];

const stateToProps = (state: Store) => {
    return state.controlsState;
}

export const ControlList: React.SFC<{}> = inject<
    Store,
    ControlListProps,
    ControlListProps,
    {}
>(stateToProps)(observer(controlsState => {
    return (
        <section className="control-list">
            {Array.from(controlsState.keys()).map(key => {
                return (<Toggle {...controlsState.get(key)!} key={key} />)
            })}
        </section>
    )
}));
