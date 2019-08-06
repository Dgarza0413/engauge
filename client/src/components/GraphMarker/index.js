import React from 'react';
import './style.css';

const Marker = (props) => {
    const { color, name } = props;
    return (
        <div className="marker"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
        />
    );
};

export default Marker;