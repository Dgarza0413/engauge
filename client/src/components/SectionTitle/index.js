import React from "react";
import "./style.css";

function SectionTitle(props) {
    console.log(props)
    // function SectionTitle({ title }) {
    return (
        <div className="title-container">
            {props.data ? <h4>{props.data.oil} BBls</h4> : ""}
            <h4 className="section-title" style={{ marginBottom: props.mb || "15px" }}>{props.children}</h4>
            {/* <h4 className="section-title" style={{ marginBottom: "15px" }}>{title}</h4> */}
        </div>
    );
}

export default SectionTitle;