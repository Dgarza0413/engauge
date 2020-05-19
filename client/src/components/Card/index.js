import React from "react";
import "./style.css";

const style = {
    wrapper: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '5px',
        marginBottom: '20px',
        boxShadow: '5px 5px 10px rgba(000, 000, 000, 0.03)',
    }
}

function Card(props) {
    return (
        <div
            className="card-wrapper"
            style={{ padding: props.padding || "", overflow: props.overflow || "" }}>
            {props.children}
        </div>
    );
}

export default Card;