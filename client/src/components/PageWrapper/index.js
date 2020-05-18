import React from "react";

const style = {
    wrapper: {
        marginLeft: '225px',
        padding: '4%'
    }
}

function PageWrapper(props) {
    return (
        <div style={style.wrapper}>
            {props.children}
        </div>
    );
}

export default PageWrapper;