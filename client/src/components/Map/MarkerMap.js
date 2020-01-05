import React, { useState, useEffect } from 'react'

const MarkerMap = () => {

    const handleMouseOver = (index) => {
        return () => {
            this.setState({ showInfoWindow: true, index: index });
        }
    }

    const handleMouseExit = (event) => {
        // event.preventDefault();
        this.setState({ showInfoWindow: false });
    }
    return (
        <div>

        </div>
    )
}

export default MarkerMap