// Import Page Style
import './SearchForm.css';

// Import React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${query}`);
    }

    return (
        <>
            <div className="SearchForm">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setQuery(e.target.value)} />
                    
                    <input type="submit" value="Search" />
                </form>
            </div>
        </>
    );
};

export default SearchForm;