// Import Page Style Module
import styles from './HookUseRef.module.css';

// Import React Libs
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const HookUseRef = () => {
    /* 10 - useRef */
    const numberRef = useRef(0);
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    });

    /* 11 - useRef & DOM */
    const inputRef = useRef(null);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputRef);

        setText("");

        inputRef.current.focus();
    };

    return (
        <>
            <div className={styles.HookUseRef}>
                {/* 10 - useRef */}
                <div className={styles.section}>
                    <h2>useRef</h2>

                    <p><small><i>Allows to reference a value that's not needed for rendering</i></small></p>

                    <p>The component has been rendered {numberRef.current} times</p>

                    <p>Counter 1: {counterA}</p>
                    <button onClick={() => setCounterA(counterA + 1)}>Add +1</button>
                    <p>Counter 2: {counterB}</p>
                    <button onClick={() => setCounterB(counterB + 1)}>Add +1</button>
                </div>

                {/* 11 - useRef & DOM */}
                <div className={styles.section}>
                    <h2>useRef & DOM</h2>

                    <p><small><i>Allows to select elements in JSX and apply functions to them. Ex.: focus function on input</i></small></p>

                    <p>Check the DevTools Console</p>
                    <p><code>console.log(Object "current: value")</code></p>

                    <form onSubmit={handleSubmit}>
                        <label>Type a string: <br />
                            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
                        </label> <br /><br />

                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div> 
        </>
    );
};

export default HookUseRef;