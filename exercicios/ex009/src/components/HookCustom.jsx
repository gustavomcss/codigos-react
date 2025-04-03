// Import Page Style Module
import styles from './HookCustom.module.css';

// Import React Libs
import { useState } from 'react';

// Import Hooks
import { usePrevious } from '../hooks/usePrevious';

const HookCustom = () => {
    /* 16 - Custom Hook */
    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

    return (
        <>
            <div className={styles.HookCustom}>
                {/* 16 - Custom Hook */}
                <div className={styles.section}>
                    <h2>Custom Hook</h2>

                    <p><small><i>Allows to separate a hook for a more specific purpose, such as fetch data.</i></small></p>

                    <p>Current: {number}</p>
                    <p>Previous: {previousValue}</p>

                    <button onClick={() => setNumber(Math.random)}>Change Number!</button>
                </div>
            </div>
        </>
    );
};

export default HookCustom;