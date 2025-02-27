// Import Page Style
import './Search.css';

// Import React
import { useFetch } from '../hooks/useFetch';
import { useSearchParams, Link } from 'react-router-dom';

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = `http://localhost:5174/products?${searchParams}`;

    const {data, loading, error} = useFetch(url);

    return (
        <>
            <div className="Search">
                <h1>Available Results</h1>

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

export default Search;