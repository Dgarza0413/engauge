import React from "react";

const style = {
    wrapper: {
        marginLeft: '225px',
        padding: '4%'
    }
}

function PageWrapper(props) {
    const { viewMode } = props
    return (
        <div style={viewMode ? null : style.wrapper}>
            {props.children}
        </div>
    );
}

export default PageWrapper;