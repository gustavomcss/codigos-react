// Import Page Style Module
import styles from './HookUseContext.module.css';

// Import React Libs
import { createContext } from 'react';

// Create Context
export const SomeContext = createContext();

// Create Context Provider Component
export const HookUseContext = ({ children }) => {
    /* 9 - useContext */
    const contextValue = "Testing context";

    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>
    );
};