import * as React from "react";
import { ToggleControl } from "client/state";
import { action } from "mobx";
import { observer } from "mobx-react";
import "./Toggle.css"

export type ToggleProps = ToggleControl;

@observer
export class Toggle extends React.Component<ToggleProps> {

    constructor(props: ToggleProps) {
        super(props);
    }

    @action
    private onChange = () => {
        this.props.setValue(!this.props.value);
    };

    public render() {
        const { value, title } = this.props;
        return (
            <div className="toggle-container">
                <p className="toggle-title">{title}</p>
                <label className="toggle">
                    <input
                        checked={value}
                        onChange={this.onChange}
                        type="checkbox"
                        className="toggle-input"
                    />
                    <span className="toggle-slider" />
                </label>
            </div>
        );
    }

};
