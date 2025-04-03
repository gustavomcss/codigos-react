// Import Page Style Module
import styles from './HookUseCallback.module.css';

// Import React Libs
import { useCallback } from 'react';
import { useState } from 'react';

// Import List
import List from './List';

const HookUseCallback = () => {
    /* 12 - useCallback */
    const [counter, setCounter] = useState(0);

    const getItemsFromDatabase = useCallback(() => {
        return ['Item 1', 'Item 2', 'Item 3'];
    }, []);

    return (
        <>
            <div className={styles.HookUseCallback}>
                {/* 12 - useCallback */}
                <div className={styles.section}>
                    <h2>useCallback</h2>

                    <p><small><i>Allows to cache a function definition between re-renders. Useful for optimizing perfomance, avoiding unnecessary re-creation of functions</i></small></p>

                    <p>Check the DevTools Console</p>
                    <p><code>console.log("Searching for items in DB...")</code></p>

                    <List getItems={getItemsFromDatabase} />

                    <button onClick={() => setCounter(counter + 1)}>Change!</button>
                    <p>Counter: {counter}</p>
                </div>
            </div>
        </>
    );
};

export default HookUseCallback;