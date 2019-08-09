import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card-wrapper" style={{padding: props.padding || ""}}>
            {props.children}
        </div>
    );
}

export default Card;