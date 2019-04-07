import { ToggleControl } from "client/state";
import { action } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import "./Toggle.css";

export type ToggleProps = ToggleControl;

@observer
export class Toggle extends React.Component<ToggleProps> {

    constructor(props: ToggleProps) {
        super(props);
    }

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

    @action("Toggle Component Change")
    private onChange = () => {
        this.props.setBroadcast(true);
        this.props.setValue(!this.props.value);
    }

}
