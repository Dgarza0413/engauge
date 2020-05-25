import React from "react";
import "./style.css";

function SectionTitle(props) {
    return (
        <div className="title-container">
            <h4 className="section-title" style={{ marginBottom: props.mb || "15px" }}>{props.children}</h4>
        </div>
    );
}

export default SectionTitle;