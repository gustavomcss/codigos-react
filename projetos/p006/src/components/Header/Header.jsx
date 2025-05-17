// Import Styles
import './Header.css';

// Import Images
import Logo from '/assets/hamb-1.png';

const Header = () => {
    return (
        <>
            <header className="Header">
                <div className="brand">
                    <img src={Logo} alt="Logo DevBurguer" />

                    <div className="brand-info">
                        <h1>Dev Burger</h1>
                        <p>Av. 19 c/ 18 e 20, Ituiutaba - MG</p>
                    </div>

                    <div className="brand-opening">
                        <span>Monday - Sunday</span>
                        <span>06:00 PM - 10:00 PM</span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;