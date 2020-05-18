import React from "react";

const style = {
    button: {
        border: '0',
        backgroundColor: '#d5b577',
        color: 'white',
        fontWeight: '600',
        padding: '5px 15px',
        borderRadius: '3px',
        outline: 'none',
    }
}


const checkType = (type, content, mb, value, width) => {
    if (type === "submit") {
        return <input
            type={type}
            value={value}
            // className="button"
            // className={style.button}
            style={style.button} />
        // style={{ marginBottom: mb || "40px", width: width || "" }} />
    } else {
        return (
            <div
                // className="button"
                style={style.button}
            // style={{ marginBottom: mb || "40px" }}
            >
                {content}
            </div>
        );
    }
}

function Button(props) {
    return (
        checkType(props.type, props.children, props.mb, props.value, props.width)
    );
}

export default Button;