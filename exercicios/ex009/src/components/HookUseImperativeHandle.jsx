// Import Page Style Module
import styles from './HookUseImperativeHandle.module.css';

// Import React Libs
import { useRef } from 'react';

// Import Component
import SomeComponent from './SomeComponent';

const HookUseImperativeHandle = () => {
    /* 15 - useImperativeHandle */
    const componentRef = useRef(null);

    return (
        <>
            <div className={styles.HookUseImperativeHandle}>
                {/* 15 - useImperativeHandle */}
                <div className={styles.section}>
                    <h2>useImperativeHandle</h2>

                    <p><small><i></i></small></p>

                    <SomeComponent ref={componentRef} />

                    <button onClick={() => componentRef.current.validate()}>Validate</button>
                </div>
            </div>
        </>
    );
};

export default HookUseImperativeHandle;