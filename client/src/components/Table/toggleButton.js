import React from "react";
import ButtonStyle from "./buttonStyle.css";

function ToggleButton(props) {
    console.log(props.isOn, props.name);

    return (
    <div>
      <div class="col-sm-5">
        <button
          type="button"
          className={ "btn btn-sm btn-toggle " + (props.isOn ? "active" : "" )}
          data-toggle="button"
          aria-pressed={props.isOn}
          autocomplete="off"
        >
          <div class="handle" />
        </button>
      </div>
    </div>
  );
}

export default ToggleButton;
