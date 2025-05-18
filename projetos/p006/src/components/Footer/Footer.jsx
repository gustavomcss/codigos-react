// Import Styles
import './Footer.css';

// Import React Icons
import { MdOutlineShoppingCart } from "react-icons/md";

// Import Contexts
import { useCart } from '../../contexts/CartContext.jsx';

const Footer = ({ onCartOpen }) => {
    
    const { cart } = useCart();

    return (
        <>
            <footer className="Footer">
                <button id="cart" onClick={onCartOpen} >
                    (<span id="cart-count">{Object.keys(cart).length}</span>) See My Chart <MdOutlineShoppingCart />
                </button>
            </footer>
        </>
    );
};

export default Footer;