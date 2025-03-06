// Import Page Style
import './About.css';

// Import React
/* import { useContext } from 'react'; */

// Import Context
/* import { CounterContext } from '../context/CounterContext'; */

// Import Hooks
import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const About = () => {
    /* const {counter} = useContext(CounterContext); */
    const {counter} = useCounterContext();

    const {color, dispatch} = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({ type: color });
    };

    return (
        <>
            <div className="About">
                <h1 style={{ color: color }}>About</h1>

                <p>Counter Value: {counter}</p>
                <div>
                    <button onClick={() => setTitleColor("RED")}>Red</button>
                    <button onClick={() => setTitleColor("BLUE")}>Blue</button>
                </div>
            </div>
        </>
    );
};

export default About;