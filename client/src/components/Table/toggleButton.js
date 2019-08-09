import React from "react";
import ButtonStyle from "./buttonStyle.css";

function ToggleButton() {
  return (
    <div>
      <div class="col-sm-5">
        <button
          type="button"
          class="btn btn-sm btn-toggle"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          <div class="handle" />
        </button>
      </div>
    </div>
  );
}

export default ToggleButton;
