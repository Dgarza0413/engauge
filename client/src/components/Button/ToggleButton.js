import React, { useState } from "react";
import API from "../../utils/API.js";
import "./style.css";

const ToggleButton = (props) => {
    const [on, setOn] = useState(false);
    const { id, isOn } = props

    const changeStatus = async () => {
        console.log('button clicked')
        await API.updateWellStatus(id, !isOn)
        await setOn({ isOn: !isOn })
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