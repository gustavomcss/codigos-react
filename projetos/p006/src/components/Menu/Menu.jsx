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

    const hamburgers = [
        {
            img: Hamb01,
            name: "Smash",
            description: "Wheat bun, double smashed burger, swiss cheese, shredded lettuce, and house mayo.",
            price: 7.99
        },
        {
            img: Hamb02,
            name: "Bacon Crispy",
            description: "Soft bun, double smashed burger, cheddar cheese, crispy bacon strips, and house mayo.",
            price: 11.99
        },
        {
            img: Hamb03,
            name: "Double Cheese",
            description: "Buttery brioche bun, double smashed burger, double layer of cheddar cheese, and house mayo.",
            price: 6.50
        },
        {
            img: Hamb04,
            name: "Chicken Classic",
            description: "Toasted seed bun, crispy breaded chicken fillet, cheddar cheese, tomato, onion, and house mayo.",
            price: 7.99
        },
        {
            img: Hamb05,
            name: "Cheese Lover",
            description: "Sesame seed bun, juicy beef patty, double layer of cheddar cheese, tomato, and house mayo.",
            price: 10
        },
        {
            img: Hamb06,
            name: "Crispy BBQ",
            description: "Sesane seed bun, crispy fried chicken fillet, swiss cheese, tomato, onion, and house mayo.",
            price: 12.99
        },
        {
            img: Hamb07,
            name: "Tex-Mex Beast",
            description: "Toasted bun, juicy beef patty, cheddar cheese, homemade chilli with beans and house mayo.",
            price: 10.50
        },
        {
            img: Hamb08,
            name: "Green Garden",
            description: "Buttery brioche bun, herbed veggie patty, pickled onions, shredded carrots, and house mayo.",
            price: 6.99
        }
    ];

    const drinks = [
        {
            img: Drink01,
            name: "Coca-Cola",
            description: "350ml Coca-Cola",
            price: 2.99
        },
        {
            img: Drink02,
            name: "Guarana Antartica",
            description: "350ml Guarana Antartica",
            price: 2.99
        }
    ];
    
    return (
        <>
            <main className="Menu">
                <h2>Discover Our Menu</h2>

                <div className="menu-container">
                    {hamburgers.map((hamburger, index) => (
                        <Item key={index} img={hamburger.img} name={hamburger.name} description={hamburger.description} price={hamburger.price} />
                    ))}
                </div>

                <h2>Drinks</h2>
                <div className="menu-container">
                    {drinks.map((drink, index) => (
                        <Item key={index} img={drink.img} name={drink.name} description={drink.description} price={drink.price} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Menu;