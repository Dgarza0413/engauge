import React from "react";
import "./buttonStyle.css";
import API from "../../utils/API.js";

class ToggleButton extends React.Component {
    state = {
        isOn: this.props.isOn
    };

    changeStatus = (event) => {
        API.updateWellStatus(this.props.id, !this.state.isOn).then(res => {
            this.setState({
                isOn: !this.state.isOn
            });
        });
    };

    render() {
        return (
            <div>
                <button
                    type="button"
                    className={"btn btn-sm btn-toggle " + (this.state.isOn ? "active" : "")}
                    data-toggle="button"
                    aria-pressed={this.state.isOn}
                    autoComplete="off"
                    onClick={this.changeStatus}
                >
                    <div className="handle" />
                </button>
            </div>
        );
    }
}

export default ToggleButton;