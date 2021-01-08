import { useState } from "react";

const useInputChange = () => {
    const [value, setValue] = useState({})

    const assign = (obj, keyPath, value) => {
        let lastKeyIndex;
        let key;
        lastKeyIndex = keyPath.length - 1;
        for (var i = 0; i < lastKeyIndex; ++i) {
            key = keyPath[i];
            if (!(key in obj)) {
                obj[key] = {}
            }
            obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
    }

    const handleInputChange = (event) => {
        event.persist()
        if (event.target.name.includes('.')) {
            const field = event.target.name.split('.')
            let { value } = event.target

            setValue(values => {
                assign(values, field, value)
                return {
                    ...values,
                }
            })
        } else {
            setValue(values => {
                return {
                    ...values,
                    [event.target.name]: event.target.value
                }
            })
        }
    }
    const handleBind = (event) => {
        setValue(event)
    }
    return [value, handleInputChange, handleBind]
}

export default useInputChange;