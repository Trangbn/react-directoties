import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import cartContext from "../store/CartContext.jsx";
import {currencyFormat} from '../util/formatting.js';
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout(){

    const cartCtx = useContext(cartContext);
    const userProgressCtx = useContext(userProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose(){
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order:{
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        })
    }

    return <Modal open={userProgressCtx.progress === 'checkout'}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormat.format(cartTotal)}</p>
            <Input label="Fullname" id="full-name" type="text" placeholder="Full name"/>
            <Input label="Email Address" id="email-address" type="email" placeholder="Email"/>
            <Input label="Street" id="street" type="text" placeholder="Street"/>
            <div className="control-row">
                <Input label="Postal code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button >Submit Order</Button>
            </p>
        </form>
    </Modal>
}