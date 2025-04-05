// Import React Libs
import { useState, useEffect } from 'react';

// Import React Redux
import { useSelector } from 'react-redux';

export const useAuth = () => {
    // Get User from Redux Store
    const { user } = useSelector((state) => state.auth);

    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setAuth(true);
        } else {
            setAuth(false);
        }

        setLoading(false);
    }, [user]);

    return {
        auth,
        loading
    };
};