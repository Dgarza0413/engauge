import React from "react";
import "./style.css";

function SectionTitle(props) {
    return (
        <div>
            <h4 className="section-title">{props.children}</h4>
        </div>
    );
}

export default SectionTitle;