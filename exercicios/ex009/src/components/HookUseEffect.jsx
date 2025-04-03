// Import Page Style Module
import styles from './HookUseEffect.module.css';

// Import React Libs
import { useEffect } from 'react';
import { useState } from 'react';

const HookUseEffect = () => {
    /* 5 - useEffect */
    useEffect(() => {
        console.log("useEffect is running!");
    });

    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(number + 1);
    };

    /* 6 - useEffect (Empty Array) */
    useEffect(() => {
        console.log("useEffect will run only once!");
    }, []);

    /* 7 - useEffect (Dependency Array) */
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        console.log("useEffect will run only when anotherNumber changes!");
    }, [anotherNumber]);

    const changeAnotherNumber = () => {
        setAnotherNumber(anotherNumber + 1);
    };

    /* 8 - useEffect (Cleanup Function) */
    useEffect(() => {
        /* const timer = setTimeout(() => {
            console.log("useEffect with Cleanup Function!");

            setAnotherNumber(anotherNumber + 1);
        }, 2000); */

        return () => clearTimeout(timer);
    }, [anotherNumber]);

    return (
        <>
            <div className={styles.HookUseEffect}>
                {/* 5 - useEffect */}
                <div className={styles.section}>
                    <h2>useEffect</h2>

                    <p><small><i>Executed whenever the component is changed</i></small></p>

                    <p>Check the DevTools Console</p>
                    <p><code>console.log("useEffect is running!")</code></p>
                    <p>Number: {number}</p>

                    <button onClick={changeNumber}>Add +1</button>
                </div>

                {/* 6 - useEffect (Empty Array) */}
                <div className={styles.section}>
                    <h2>useEffect (Empty Array)</h2>

                    <p><small><i>Executed only once (page load)</i></small></p>

                    <p>Check the DevTools Console</p>
                    <p><code>console.log("useEffect will run only once!")</code></p>
                </div>

                {/* 7 - useEffect (Dependency Array) */}
                <div className={styles.section}>
                    <h2>useEffect (Dependency Array)</h2>

                    <p><small><i>Executed whenever variables in the dependency array are changed</i></small></p>

                    <p>Check the DevTools Console</p>
                    <p><code>console.log("useEffect will run only when anotherNumber changes!")</code></p>

                    <p>Another Number: {anotherNumber}</p>
                    <button onClick={changeAnotherNumber}>Add +1</button>
                </div>

                {/* 8 - useEffect (Cleanup Function) */}
                <div className={styles.section}>
                    <h2>useEffect (Cleanup Function)</h2>

                    <p><small><i>Executed to clean up side effects before the next effect runs or when the component unmounts</i></small></p>

                    <p>Another Number: {anotherNumber}</p>
                    <button onClick={changeAnotherNumber}>Add +1</button>
                </div>
            </div>
        </>
    );
};

export default HookUseEffect;