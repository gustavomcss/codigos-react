// Import Page Style
import './Home.css';

// Import React
import { Link } from 'react-router-dom';

// Import Hooks
import { useFetch } from '../hooks/useFetch';

const Home = () => {
    const url = "http://localhost:5174/products";

    const { data, loading, error } = useFetch(url);

    return (
        <>
            <div className="Home">
                <h1>Products</h1>

                {error && 
                    <p>{error}</p>
                }

                <ul className="products">
                    {data &&
                        data.map((product) => (
                            <li key={product.id}>
                                <h2>{product.name}</h2>
                                <p>US$: {product.price}</p>

                                <Link to={`/products/${product.id}`}>Details</Link>
                            </li>                            
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default Home;