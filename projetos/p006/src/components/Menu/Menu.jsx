// Import Styles
import './Menu.css';

// Import Images
import Hamb01 from '/assets/hamb-1.png';
import Hamb02 from '/assets/hamb-2.png';
import Hamb03 from '/assets/hamb-3.png';
import Hamb04 from '/assets/hamb-4.png';
import Hamb05 from '/assets/hamb-5.png';
import Hamb06 from '/assets/hamb-6.png';
import Hamb07 from '/assets/hamb-7.png';
import Hamb08 from '/assets/hamb-8.png';
import Drink01 from '/assets/refri-1.png';
import Drink02 from '/assets/refri-2.png';

// Import Components
import Item from '../Item/Item';

const Menu = () => {
    return (
        <>
            <main className="Menu">
                <h2>Discover Our Menu</h2>

                <div className="menu-container">
                    <Item img={Hamb01} alt="Smash" description="Wheat bun, double smashed burger, swiss cheese, shredded lettuce, and house mayo." price={7.99} />

                    <Item img={Hamb02} alt="Bacon Crispy" description="Soft bun, double smashed burger, cheddar cheese, crispy bacon strips, and house mayo." price={11.99} />

                    <Item img={Hamb03} alt="Double Cheese" description="Buttery brioche bun, double smashed burger, double layer of cheddar cheese, and house mayo." price={6.50} />

                    <Item img={Hamb04} alt="Chicken Classic" description="Toasted seed bun, crispy breaded chicken fillet, cheddar cheese, tomato, onion, and house mayo." price={7.99} />

                    <Item img={Hamb05} alt="Cheese Lover" description="Sesame seed bun, juicy beef patty, double layer of cheddar cheese, tomato, and house mayo." price={10} />

                    <Item img={Hamb06} alt="Crispy BBQ" description="Sesane seed bun, crispy fried chicken fillet, swiss cheese, tomato, onion, and house mayo." price={12.99} />

                    <Item img={Hamb07} alt="Tex-Mex Beast" description="Toasted bun, juicy beef patty, cheddar cheese, homemade chilli with beans and house mayo." price={10.50} />

                    <Item img={Hamb08} alt="Green Garden" description="Buttery brioche bun, herbed veggie patty, pickled onions, shredded carrots, and house mayo." price={6.99} />
                </div>

                <h2>Drinks</h2>
                <div className="menu-container">
                    <Item img={Drink01} alt="Coke Can" description="350ml Coca-Cola" price={2.99} />

                    <Item img={Drink02} alt="Guarana Can" description="350ml Guarana Antartica" price={2.99} />
                </div>
            </main>
        </>
    );
};

export default Menu;