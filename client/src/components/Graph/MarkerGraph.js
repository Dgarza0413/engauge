import React from 'react';
import InfoWindow from "../InfoWindow";
import './style.css';

const checkDiv = (content, mouseOver, mouseOut) => {
    if (content === undefined) {
        return;
    } else {
        return <InfoWindow mouseOver={mouseOver} mouseOut={mouseOut}>{content}</InfoWindow>;
    }
}


const Marker = (props) => {
    const { color, name } = props;
    return (
        <div className="marker-container">
            <div className="marker"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
                onMouseOver={props.mouseOver}
                onMouseOut={props.mouseOut}
            >
                {checkDiv(props.children, props.mouseOver, props.mouseOut)}
            </div>
        </div>
    );
};

export default Marker;