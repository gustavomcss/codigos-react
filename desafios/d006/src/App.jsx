// Import Style
import './App.css';

// Import React
import { useState, useEffect } from 'react';

// Import Hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:5174/products"

function App() {
    const {data, httpConfig, loading, error} = useFetch(url);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name: name,
            price: price
        };

        httpConfig(product, "POST");

        setName("");
        setPrice("");
    };

    const handleDelete = (id) => {
        httpConfig(id, "DELETE");
    };

    return (
        <>
            <div className="App">
                <h1>List of Products</h1>

                {loading && 
                    <p>Loading Data...</p>
                }

                {!loading && 
                    <ul>
                        {data && data.map((product) => (
                            <li key={product.id}>
                                {product.name} - R$: {product.price}
                                
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                }

                {error &&
                    <p>{error}</p>
                }

                <div className="add-product">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </label>

                        <label>
                            Price:
                            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </label>

                        {loading &&
                            <input type="submit" value="Create" disabled />
                        }

                        {!loading &&
                            <input type="submit" value="Create" />
                        }

                        
                    </form>
                </div>
            </div>
        </>
    );
};

export default App;
