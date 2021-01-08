import React, { useState, useEffect } from 'react'

const useSubmit = () => {
    const [value, setValue] = useState({})
    const handleSubmit = (e, value) => {

    }
    return [handleSubmit]
}

export default useSubmit;
