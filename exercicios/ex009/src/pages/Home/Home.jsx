// Import Page Style Module
import styles from './Home.module.css';

// Import React Libs
import { useContext } from 'react';

// Import Context Components
import { SomeContext } from '../../components/HookUseContext';

// Import Hook Components
import HookUseState from '../../components/HookUseState';
import HookUseReducer from '../../components/HookUseReducer';
import HookUseEffect from '../../components/HookUseEffect';
import HookUseRef from '../../components/HookUseRef';
import HookUseCallback from '../../components/HookUseCallback';
import HookUseMemo from '../../components/HookUseMemo';
import HookUseLayoutEffect from '../../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../../components/HookUseImperativeHandle';
import HookCustom from '../../components/HookCustom';

const Home = () => {
    /* 9 - useContext */
    const { contextValue } = useContext(SomeContext);

    return (
        <>
            <div className={styles.Home}>
                <h1>Home</h1>

                <HookUseState />
                <HookUseReducer />
                <HookUseEffect />

                {/* 9 - useContext */}
                <div className={styles.section}>
                    <h2>useContext</h2>

                    <p><small><i>Allows to share data between components, without having to pass proposals manually</i></small></p>

                    <p>Context Value: {contextValue}</p>
                </div>

                <HookUseRef />
                <HookUseCallback />
                <HookUseMemo />
                <HookUseLayoutEffect />
                <HookUseImperativeHandle />
                <HookCustom />
            </div>
        </>
    );
};

export default Home;