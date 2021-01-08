import React from "react";

const style = {
    seconadaryWrapper: {
        marginRight: '75px'
    }
}

function SeconadaryWrapper(props) {
    return (
        <div style={style.seconadaryWrapper}>
            {props.children}
        </div>
    );
}

export default SeconadaryWrapper;