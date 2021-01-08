import { useState } from 'react'

const useFetch = () => {
    const [value, setValue] = useState([]);
    const [postValue, setPostValue] = useState({});
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

    const handleManyFetchGET = (url) => {
        Promise.all(url)
            .then(function (responses) {
                return Promise.all(responses.map(function (response) {
                    return response.json();
                }));
            }).then(function (data) {
                console.log(data)
            }).catch(function (error) {
                console.log(error)
            })
    }

    const handleFetchGET = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json()
            await setValue(data);
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

    return [value, handleFetchGET, handleManyFetchGET]
}

export default useFetch
