// Base URL for the API
export const api = "http://localhost:5000/api";

// Base URL for file uploads
export const upload = "http://localhost:5000/uploads";

// Function to configure request options for API calls
export const requestConfig = (method, data, token = null, image = null) => {
    // Configuration object. It changes based on the request type
    let config;

    if (image) {
        config = {
            method: method,
            body: data,
            headers: {}
        };
    } else if (method === "DELETE" || data === null) {
        config = {
            method: method,
            headers: {}
        };
    } else {
        config = {
            method: method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };
    }

    // If a token is provided, add it to the Authorization header
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};