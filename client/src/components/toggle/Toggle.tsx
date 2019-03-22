import * as React from "react";
import "./Toggle.css"

export interface ToggleProps {
    enabled: boolean;
    title: string;
    setValue: (value: boolean) => void;
}

export const Toggle: React.SFC<ToggleProps> = props => {
    return (
        <div className="toggle-container">
            <p className="toggle-title">{props.title}</p>
            <label className="toggle">
                <input
                    onChange={() => { props.setValue(!props.enabled) }}
                    checked={props.enabled}
                    type="checkbox"
                    className="toggle-input"
                />
                <span className="toggle-slider" />
            </label>
        </div>
    );
};
