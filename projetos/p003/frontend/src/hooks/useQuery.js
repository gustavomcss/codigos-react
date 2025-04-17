// Import React Libs
import { useMemo } from 'react';

// Import React Router DOM
import { useLocation } from 'react-router-dom';

export function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
};