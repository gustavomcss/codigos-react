// Import Styles
import './Modal.css';

// Import React Icons
import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import { MdRemoveShoppingCart } from "react-icons/md";

// Import React Libs
import { useEffect, useState, useRef } from 'react';

// Import Contexts
import { useCart } from '../../contexts/CartContext.jsx';

// Import Toastify
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

const Modal = ({ onCartClose, visibility, isOpen }) => {

    const { cart, calcTotalPrice, removeItemFromCart, removeItemQuantity, addItemQuantity, clearCart } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);

    const [adress, setAdress] = useState("");

    const refMask = useRef(null);
    const refAdressWarning = useRef(null);

    const onCartCloseOut = (e) => {
        if (e.target === refMask.current) {
            onCartClose();
        }
    };

    const formatPrice = (price) => {
        const number = Number(price);

        return '$ ' + number.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true
        });
    };

    const renderCartItems = () => {
        const keys = Object.keys(cart);

        if (keys.length === 0) {
            return (
                <div className="item">
                    <div className="empty-cart">
                        <MdRemoveShoppingCart />
                        <p>Your Cart is Empty!</p>
                    </div>
                </div>
            );
        } else {
            return keys.map((key) => {
                const item = cart[key];

                return (
                    <div className="item" key={key}>
                        <div className="item-info">
                            <p className="info-name">{item.name}</p>
                            <p className="info-price">{formatPrice(item.price)}</p>
                        </div>
                        <div className="buttons-container">
                            <div className="quantity-container">
                                <button onClick={() => removeItemQuantity(item.name)}><FiMinus /></button>
                                <span className="info-qnt">{item.quantity}</span>
                                <button onClick={() => addItemQuantity(item.name)}><FiPlus /></button>
                            </div>

                            <button id="remove-btn" onClick={() => removeItemFromCart(item.name)}><FiX /> </button>
                        </div>
                    </div>
                );
            });
        }
    };

    const sendMessage = () => {
        const keys = Object.keys(cart);

        const cartItems = keys.map((key) => {
            const item = cart[key];

            return `(${item.quantity}) x ${item.name} - ${formatPrice(item.price)} `;
        }).join("\n");

        console.log(cartItems);

        const message = `${cartItems}\n\nEndereço: ${adress}\n\nTotal: ${formatPrice(calcTotalPrice())}`;
        const phone = "5534998894555";

        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    const checkOutOrder = () => {
        const adressInput = document.querySelector("input[type='text']");
        const keys = Object.keys(cart);

        if (!isOpen) {
            Toastify({
                text: "Sorry, Dev Burger is Closed!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#FF0000",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    textAlign: "center",
                    width: "320px"
                }
            }).showToast();
            return;
        }

        if (keys.length === 0) {
            Toastify({
                text: "Your Cart is Empty!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#FF0000",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    textAlign: "center",
                    width: "320px"
                }
            }).showToast();
            return;
        }

        if (adress.length === 0) {
            refAdressWarning.current.style.display = "block";
            adressInput.style.border = "1px solid #FF0000";
            return;
        }

        refAdressWarning.current.style.display = "none";
        adressInput.style.border = "1px solid #00000050";

        Toastify({
            text: "Hungry? Your order is on the Way!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#16A34A",
                color: "#FFFFFF",
                fontSize: "12px",
                textAlign: "center",
                width: "320px"
            }
        }).showToast();

        setAdress("");
        onCartClose();
        clearCart();
    };

    useEffect(() => {
        setTotalPrice(formatPrice(calcTotalPrice()));
    }, [cart]);

    return (
        <>
            <div className="Modal" style={{ display: visibility ? 'flex' : 'none' }} onClick={onCartCloseOut}>
                <div className="mask" ref={refMask}>
                    <div className="modal">
                        <h2>My Chart</h2>

                        <div className="cart-items">
                            {renderCartItems()}
                        </div>

                        <p className="cart-total">Total: <span>{totalPrice}</span></p>

                        <p className="address">Delivery Adress: </p>
                        <input type="text" placeholder="Type your Full Address..." value={adress} onChange={(e) => setAdress(e.target.value)} />

                        <p id="address-warning" ref={refAdressWarning}>Type your FULL Address!</p>

                        <div className="buttons-container">
                            <button id="close-modal" onClick={onCartClose}>Close</button>
                            <button id="checkout" onClick={checkOutOrder}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;