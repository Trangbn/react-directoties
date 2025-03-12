import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormat} from "../util/formatting.js";
import Button from "./UI/Button.jsx";

export default function Cart() {

    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
    return <Modal className="cart">
        <h2>Your cart</h2>
        <ul>
            {cartCtx.items.map((item) => {
                return <li key={item.id}>{item.name} - {item.quantity}</li>;
            })}
        </ul>
        <p className="cart-total">{currencyFormat.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly>Close</Button>
            <Button>Go to checkout</Button>
        </p>
    </Modal>
}