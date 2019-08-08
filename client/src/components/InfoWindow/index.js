import React from "react";
import "./style.css";

function InfoWindow(props) {
    return (
        <div className="info-window">
            {props.children}
        </div>
    );
}

export default InfoWindow;

//onMouseOver={props.mouseOver} onMouseOut={props.mouseOut}