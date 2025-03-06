// Import Component Style
import './ChangeCounter.css';

// Import React
import { useContext } from 'react';

// Import Context
import { CounterContext } from '../context/CounterContext';

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext);

    return (
        <>
            <div className="ChangeCounter">
                <button onClick={() => setCounter(counter + 1)}>Add +1 to Counter</button>
            </div>
        </>
    );
};

export default ChangeCounter;