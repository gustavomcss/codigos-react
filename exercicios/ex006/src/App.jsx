// Import Style
import './App.css';

// Import React
import { useState, useEffect } from 'react';

// Import Hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:5174/products"

function App() {
    const [products, setProducts] = useState([]);

    const {data} = useFetch(url);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    /* useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();

            setProducts(data);
        };

        fetchData();
    }, []); */

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name: name,
            price: price
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const addedProduct = await response.json();

        setProducts((prevProducts) => [...prevProducts, addedProduct]);

        setName("");
        setPrice("");

    };

    return (
        <>
            <div className="App">
                <h1>List of Products</h1>

                <ul>
                    {data && data.map((product) => (
                        <li key={product.id}>
                            {product.name} - R$: {product.price}
                        </li>
                    ))}
                </ul>

                <div className="add-product">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>

                        <label>
                            Price:
                            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </label>

                        <input type="submit" value="Create" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default App;
