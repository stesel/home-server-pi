import * as React from "react";
import { ToggleControl } from "client/state";
import { observer } from "mobx-react";
import "./Toggle.css"

export type ToggleProps = ToggleControl;

@observer
export class Toggle extends React.PureComponent<ToggleProps> {

    public render() {
        const { value, title } = this.props;
        return (
            <div className="toggle-container">
                <p className="toggle-title">{title}</p>
                <label className="toggle">
                    <input
                        onChange={this.setValue}
                        checked={value}
                        type="checkbox"
                        className="toggle-input"
                    />
                    <span className="toggle-slider" />
                </label>
            </div>
        );
    }

    private setValue = () => {
        const { value, setValue } = this.props;
        setValue(!value);
    };

};
