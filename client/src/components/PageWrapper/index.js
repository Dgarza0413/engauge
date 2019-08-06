import React from "react";
import "./style.css";

function PageWrapper(props) {
    return (
        <div className="page-wrapper">
            {props.children}
        </div>
    );
}

export default PageWrapper;