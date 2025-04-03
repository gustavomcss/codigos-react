// Import Page Style Module
import styles from './HookUseLayoutEffect.module.css';

// Import React Libs
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const HookUseLayoutEffect = () => {
    /* 14 - useLayoutEffect */
    const [name, setName] = useState("Any name");

    useEffect(() => {
        console.log("2");

        setName("Any name 2");
    }, []);

    useLayoutEffect(() => {
        console.log("1");

        setName("Any name 1");
    }, []);

    console.log(name);

    return (
        <>
            <div className={styles.HookUseLayoutEffect}>
                {/* 14 - useLayoutEffect */}
                <div className={styles.section}>
                    <h2>useLayoutEffect</h2>

                    <p><small><i>Allows to execute a function before the browser repaints the screen</i></small></p>

                    <p>Name: {name}</p>

                    <p>Check the DevTools Console</p>
                    <p>
                        <code>
                            console.log("Any name")
                            <br />console.log("1")
                            <br />console.log("2")
                            <br />console.log("Any name 2")
                        </code>
                    </p>
                </div>
            </div>
        </>
    );
};

export default HookUseLayoutEffect;