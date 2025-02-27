// Import Component Style
import './Navbar.css';

// Import React
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>
        </>
    );
};

export default Navbar;