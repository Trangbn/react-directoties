import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import cartContext from "../store/CartContext.jsx";
import {currencyFormat} from '../util/formatting.js';
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";
import useHttp from "../hook/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    }
};

export default function Checkout(){

    const cartCtx = useContext(cartContext);
    const userProgressCtx = useContext(userProgressContext);

    const {data,
            isLoading: isSending,
            error,
            sendRequest,
            clearData,} = useHttp('http://localhost:3000/orders', requestConfig);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose(){
        userProgressCtx.hideCheckout();
    }

    function handleFinish(){
        userProgressCtx.hideCheckout();
        clearData();
    }

    function handleSubmit(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));
    }

    let actions = (<>
        <Button type="button" textOnly onClick={handleClose}>Close</Button>
        <Button >Submit Order</Button>
    </>);

    if (isSending) {
        actions = <span>Sending order request ... </span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>
    }

    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormat.format(cartTotal)}</p>
            <Input label="Fullname" id="name" type="text" placeholder="Full name"/>
            <Input label="Email Address" id="email" type="email" placeholder="Email"/>
            <Input label="Street" id="street" type="text" placeholder="Street"/>
            <div className="control-row">
                <Input label="Postal code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>
            {error && <Error title="Failed to submit order" message={error} />}
            <p className="modal-actions">
                {actions}
            </p>
        </form>
    </Modal>
}