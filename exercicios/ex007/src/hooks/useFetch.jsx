// Import React
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } else if (method === "DELETE"){
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }

        setMethod(method);
        setItemId(data);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                const json = await response.json();

                setData(json);
            } catch (error) {
                console.log(error.message);

                setError("An error occurred while loading the data");
            }

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            let json;

            if (method === "POST") {
                let fetchOptions = [url, config];

                const response = await fetch(...fetchOptions);
                json = await response.json();

            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`;
                
                const response = await fetch(deleteUrl, config);
                json = await response.json();
            }

            setCallFetch(json);
        }

        httpRequest();
    }, [url, config, method]);

    return {data, httpConfig, loading, error};
};