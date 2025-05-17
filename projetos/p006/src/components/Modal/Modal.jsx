// Import Styles
import './Modal.css';

const Modal = () => {
    return (
        <>
            <div className="Modal">
                <div className="mask">
                    <div className="modal">
                        <h2>My Chart</h2>

                        <div id="cart-items">

                        </div>

                        <p className="cart-total">Total: <span id="cart-total">0.00</span></p>

                        <p className="address">Delivery Adress: </p>
                        <input type="text" id="address" placeholder="Type your Full Address..." />

                        <p id="address-warning">Type your FULL Address!</p>

                        <div className="buttons-container">
                            <button id="close-modal">Close</button>
                            <button id="checkout">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;