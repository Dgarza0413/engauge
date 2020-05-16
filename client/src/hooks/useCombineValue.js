import { useState } from "react";

const useInputChange = () => {

    const [value, setValue] = useState({})

    const handleInputChange = (event) => {
        event.persist()
        setValue(values => {
            return {
                ...values,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleBind = (event) => {
        setValue(event)
    }


    return [value, handleInputChange, handleBind]
}

export default useInputChange;

