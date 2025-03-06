// Import Page Style
import './Products.css';

// Import React
/* import { useContext } from 'react'; */

// Import Context
/* import { CounterContext } from '../context/CounterContext'; */

// Import Hooks
import { useCounterContext } from '../hooks/useCounterContext';

const Products = () => {
    /* const {counter} = useContext(CounterContext); */
    const {counter} = useCounterContext();

    return (
        <>
            <div className="Products">
                <h1>Products</h1>

                <p>Counter Value: {counter}</p>
            </div>
        </>
    );
};

export default Products;