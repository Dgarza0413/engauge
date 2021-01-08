import React from "react";

export const style = {
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


const checkType = (type, content, mb, value, width, { ...props }) => {
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
            <button
                {...props}
                // className="button"
                style={style.button}
            // style={{ marginBottom: mb || "40px" }}
            >
                {content}
            </button>
        );
    }
}

function Button(props) {
    return (
        checkType(props.type, props.children, props.mb, props.value, props.width)
    );
}

export default Button;