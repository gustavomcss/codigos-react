// Import Styles Component
import './Navbar.css';

// Import React Libs
import { useState } from 'react';

// Import React Icons
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

// Import React Router DOM
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) {
            return;
        }

        navigate(`/search?q=${search}`);
        
        setSearch("");
    };

    return (
        <>
            <nav className="Navbar">
                <h1>
                    <Link to="/"><BiCameraMovie /> ReactMovies</Link>
                </h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for a movie" value={search} onChange={(e) => setSearch(e.target.value)} />

                    <button type="submit"><BiSearchAlt2 /></button>
                </form>
            </nav>
        </>
    );
};

export default Navbar;