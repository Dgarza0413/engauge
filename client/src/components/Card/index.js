import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card-wrapper" style={{padding: props.padding || "", overflow: props.overflow || ""}}>
            {props.children}
        </div>
    );
}

export default Card;