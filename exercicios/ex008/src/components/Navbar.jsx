// Import Component Style
import './Navbar.css';

// Import React
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/products" >Products</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </nav>
            </div>
        </>
    );
};

export default Navbar;