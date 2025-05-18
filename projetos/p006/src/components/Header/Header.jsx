// Import Styles
import './Header.css';

// Import Images
import Logo from '/assets/hamb-1.png';

const Header = ({ isOpen }) => {
    
    return (
        <>
            <header className="Header">
                <div className="brand">
                    <img src={Logo} alt="Logo DevBurguer" />

                    <div className="brand-info">
                        <h1>Dev Burger</h1>
                        <p>Av. 19 c/ 18 e 20, Ituiutaba - MG</p>
                    </div>

                    <div className="brand-opening" style={{ backgroundColor: isOpen ? "#16A34A" : "#FF0000"}}>
                        <span>Monday - Sunday | 06:00 PM - 10:00 PM</span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;