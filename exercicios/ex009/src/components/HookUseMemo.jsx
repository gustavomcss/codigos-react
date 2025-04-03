// Import Page Style Module
import styles from './HookUseMemo.module.css';

// Import React Libs
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const HookUseMemo = () => {
    /* 13 - useMemo */
    const [number, setNumber] = useState(0);

    // const premiumNumbers = ["0", "100", "200"];
    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"];
    }, []);

    useEffect (() => {
        console.log("Premium Number changed!");
    }, [premiumNumbers]);

    return (
        <>
            <div className={styles.HookUseMemo}>
                {/* 13 - useMemo */}
                <div className={styles.section}>
                    <h2>useMemo</h2>

                    <p><small><i>Allows to cache the result of calculation between re-renders. Useful for avoiding unnecessary recalculations</i></small></p>

                    <label>Try to guess the Premium Number: <br />
                        <input type="text" onChange={(e) => setNumber(e.target.value)} />
                    </label>

                    {premiumNumbers.includes(number) ? (
                        <p>You got the Premium Number!</p>
                    ) : (
                        <p>You didn't get the Premium Number!</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default HookUseMemo;