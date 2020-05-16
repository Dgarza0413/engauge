import React, { useState } from "react";
import API from '../utils/API';

const useToggleChange = (props) => {
    const [toggle, setToggle] = useState(false)
    console.log(props)

    const changeStatus = (event) => {
        event.persist();
        try {
            // API.updateWellStatus(props.id, !toggle)
            // setToggle(!toggle)
        } catch (error) {

        }
    }
}

export default useToggleChange;