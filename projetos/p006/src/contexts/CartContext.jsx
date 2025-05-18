// Import React Libs
import { useState, createContext, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const calcTotalPrice = () => {
        const keys = Object.keys(cart);

        if (keys.length === 0) {
            return 0;
        } else {
            return keys.reduce((sum, key) => {
                const item = cart[key];

                return sum + (item.price * item.quantity);
            }, 0);
        }
    };

    const addItemToCart = (name, price) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };

            if (newCart[name]) {
                newCart[name].quantity += 1;
            } else {
                newCart[name] = {
                    name: name,
                    price: price,
                    quantity: 1
                };
            }

            return newCart;
        });
    };

    const removeItemFromCart = (name) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[name];

            return newCart;
        });
    };

    const removeItemQuantity = (name) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };

            if (newCart[name].quantity > 1) {
                newCart[name].quantity -= 1;
            } else {
                delete newCart[name];
            }

            return newCart;
        });
    };

    const addItemQuantity = (name) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };

            if (newCart[name].quantity < 10) {
                newCart[name].quantity += 1;
            }

            return newCart;
        });
    };

    const clearCart = () => {
        setCart({});
    };

    return (
        <CartContext.Provider value={{ cart, calcTotalPrice, addItemToCart, removeItemFromCart, removeItemQuantity, addItemQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}