import { useState } from 'react'

const useFetch = () => {
    const [getData, setGetData] = useState([])
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const options = (method, data) => ({
        method: method,
        body: JSON.stringify(data),
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })

    const handleFetchGET = async (url, method, options) => {
        try {
            const res = await fetch(url);
            const fetchData = await res.json()
            await setGetData(fetchData);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleFetchPOST = async (e, url, data) => {
        e.preventDefault();
        try {
            const res = await fetch(url, options('POST', data));
            return res.json()
        } catch (error) {
            console.error(error)
        }
    }

    return [error, getData, handleFetchGET, handleFetchPOST]
}

export default useFetch
