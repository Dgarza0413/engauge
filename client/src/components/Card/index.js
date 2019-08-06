import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card-wrapper">
            {props.children}
        </div>
    );
}

export default Card;