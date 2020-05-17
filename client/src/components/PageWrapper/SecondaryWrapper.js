import React from "react";
import "./style.css";

function SeconadaryWrapper(props) {
    return (
        <div className="page-wrapper-secondary">
            {props.children}
        </div>
    );
}

export default SeconadaryWrapper;