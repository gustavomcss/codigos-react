// Import Styles
import './Item.css';

// Import React Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Item = ({ img, alt, description, price }) => {

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

    return (
        <>
            <div className="Item">
                <img src={img} alt={alt} />

                <div className="item-container">
                    <div className="item-info">
                        <p className="name">{alt}</p>
                        <p className="description">{description}</p>
                    </div>

                    <div className="item-chart">
                        <span className="price">{formatPrice(price)}</span>
                        <button id="add-to-cart" data-name={alt} data-price={price} ><MdOutlineAddShoppingCart /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;