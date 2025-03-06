// Import React
import { useContext } from 'react';

// Import Context
import { CounterContext } from '../context/CounterContext';

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if (!context) {
        console.log('Context Not Found!');
    }

    return context;
}