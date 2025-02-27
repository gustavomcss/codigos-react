// Import Page Style
import './Product.css';

// Import React
import { Link, useParams } from 'react-router-dom';

// Import Hooks
import { useFetch } from '../hooks/useFetch';

const Product = () => {
    const url = "http://localhost:5174/products";

    const {id} = useParams();

    const {data, loading, error} = useFetch(`${url}/${id}`);

    return (
        <>
            <div className="Product">
                {error &&
                    <p>{error}</p>
                }

                {loading &&
                    <p>Loading...</p>
                }

                {data &&
                    <div className="item">
                        <h1>{data.name}</h1>
                        <div className="details">
                            <p>US$: {data.price}</p>
                            <Link to={`/products/${data.id}/info`} >Learn More</Link>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Product;