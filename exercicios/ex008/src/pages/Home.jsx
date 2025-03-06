// Import Page Style
import './Home.css';

// Import React
/* import { useContext } from 'react'; */

// Import Context
/* import { CounterContext } from '../context/CounterContext'; */

// Import Hooks
import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

// Import Components
import ChangeCounter from '../components/ChangeCounter';

const Home = () => {
    /* const {counter} = useContext(CounterContext); */
    const {counter} = useCounterContext();

    const {color, dispatch} = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({ type: color });
    };

    return (
        <>
            <div className="Home">
                <h1 style={{ color: color }}>Home</h1>

                <p>Counter Value: {counter}</p>
                <ChangeCounter />
                <div>
                    <button onClick={() => setTitleColor("RED")}>Red</button>
                    <button onClick={() => setTitleColor("BLUE")}>Blue</button>
                </div>
            </div>
        </>
    );
};

export default Home;