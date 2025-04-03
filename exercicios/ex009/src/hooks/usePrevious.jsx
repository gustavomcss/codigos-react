// Import React Libs
import { useEffect, useRef } from 'react';
import { useDebugValue } from 'react';

export const usePrevious = (value) => {
    const ref = useRef();

    useDebugValue("CUSTOM HOOK AND USEDEBUGVALUE");
    useDebugValue("The previous number is: " + value);

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};