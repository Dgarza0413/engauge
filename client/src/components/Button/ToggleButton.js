import React from "react";
import API from "../../utils/API.js";
import "./style.css";

const ToggleButton = (props) => {
    const { id, isOn } = props

    const changeStatus = async () => {
        try {
            await API.updateWellStatus(id, !isOn)
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <button
            type="button"
            className={"btn btn-sm btn-toggle " + (isOn ? "active" : "")}
            data-toggle="button"
            aria-pressed={isOn}
            autoComplete="off"
            onClick={changeStatus}
        >
            <div className="handle" />
        </button>
    )
}

export default ToggleButton;