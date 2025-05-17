// Import Styles
import './Footer.css';

// Import React Icons
import { MdOutlineShoppingCart } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <button id="cart">
                    (<span>0</span>) See My Chart <MdOutlineShoppingCart />
                </button>
            </footer>
        </>
    );
};

export default Footer;