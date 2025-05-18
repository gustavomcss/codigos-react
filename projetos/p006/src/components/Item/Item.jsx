// Import Styles
import './Item.css';

// Import React Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Import Contexts
import { useCart } from '../../contexts/CartContext.jsx';

const Item = ({ img, name, description, price }) => {

    const { addItemToCart } = useCart();

    const formatPrice = (price) => {
        const number = Number(price);

        return (
            '$ ' + number.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true
            })
        );
    };

    const onGetItem = (e) => {
        const itemName = e.currentTarget.getAttribute('data-name');
        const itemPrice = parseFloat(e.currentTarget.getAttribute('data-price'));

        addItemToCart(itemName, itemPrice);    
    };

    return (
        <>
            <div className="Item">
                <img src={img} alt={name} />

                <div className="item-container">
                    <div className="item-info">
                        <p className="name">{name}</p>
                        <p className="description">{description}</p>
                    </div>

                    <div className="item-chart">
                        <span className="price">{formatPrice(price)}</span>
                        <button id="add-to-cart" data-name={name} data-price={price} onClick={onGetItem} ><MdOutlineAddShoppingCart /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;