// Import React
import { useContext } from 'react';

// Import Context
import { TitleColorContext } from '../context/TitleColorContext';

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if (!context) {
        console.log("Context Not Found");
    }

    return context;
};