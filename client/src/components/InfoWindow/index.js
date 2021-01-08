import React from "react";
import "./style.css";

const InfoWindow = (props) => {
    return (
        <div className="info-window">
            {props.children}
        </div>
    );
}

export default InfoWindow;