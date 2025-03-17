import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormat} from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";

export default function Cart() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleCheckout(){
        userProgressCtx.showCheckout();
    }

    function handleCloseCart(){
        userProgressCtx.hideCheckout();
    }

    return <Modal className="cart" open={userProgressCtx.progress === 'cart'}
                  onClose={userProgressContext.progress ==='cart' ? handleCloseCart: null}>
        <h2>Your cart</h2>
        <ul>
            {cartCtx.items.map((item) =>
                <CartItem key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          price={item.price}
                          onIncrease={() => cartCtx.addItem(item)}
                          onDecrease={() => cartCtx.removeItem(item.id)}
                />
            )}
        </ul>
        <p className="cart-total">{currencyFormat.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={handleCheckout}>Go to checkout</Button>}
        </p>
    </Modal>
}