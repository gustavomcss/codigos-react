// Import Page Style Module
import styles from './About.module.css';

// Import React Libs
import { useContext } from 'react';

// Import Context Components
import { SomeContext } from '../../components/HookUseContext';

const About = () => {
    /* 9 - useContext */
    const { contextValue } = useContext(SomeContext);

    return (
        <>
            <div className={styles.About}>
                <h1>About</h1>

                {/* 9 - useContext */}
                <div className={styles.section}>
                    <h2>useContext</h2>

                    <p><small><i>Allows to share data between components, without having to pass proposals manually</i></small></p>

                    <p>Context Value: {contextValue}</p>
                </div>
            </div>
        </>
    );
};

export default About;