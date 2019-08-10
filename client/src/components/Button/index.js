import React from "react";
import "./style.css";

const checkType = (type, content, mb) => {
    if (type === "submit") {
        return <input type={type} className="button" style={{marginBottom: mb || "40px"}} />
    } else {
        return (
            <div className="button" style={{marginBottom: mb || "40px"}}>
                {content}
            </div>
        );
    }
}

function Button(props) {
    return (
        checkType(props.type, props.children, props.mb)
    );
}

export default Button;