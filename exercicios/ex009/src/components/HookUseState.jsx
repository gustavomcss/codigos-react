// Import Page Style Module
import styles from './HookUseState.module.css';

// Import React Libs
import { useState } from 'react';

const HookUseState = () => {
    /* 1 - useState */
    let userName = "John Doe";
    const [name, setName] = useState("Matheus");

    const changeNames = () => {
        userName = "Jane Doe";
        setName("Jane Doe");
    };

    /* 2 - useState & input */
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    };

    return (
        <>
            <div className={styles.HookUseState}>
                {/* 1 - useState */}
                <div className={styles.section}>
                    <h2>useState</h2>

                    <p>Variable: {userName}</p>
                    <p>useState: {name}</p>

                    <button onClick={changeNames}>Change Names!</button>
                </div>

                {/* 2 - useState e input */}
                <div className={styles.section}>
                    <h2>useState & input</h2>

                    <form onSubmit={handleSubmit}>
                        <label>Type your age: <br />
                            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                        </label> <br /><br />

                        <input type="submit" value="Send" />
                    </form>

                    <p>You are {age} years old</p>
                </div>
            </div>
        </>
    );
};

export default HookUseState;