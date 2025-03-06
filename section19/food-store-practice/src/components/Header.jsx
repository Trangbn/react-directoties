import logo from '../assets/logo.jpg';
import {useContext, useRef} from "react";
import {MealContext} from "../store/meal-context.jsx";
import CartModal from "./CartModal.jsx";

export function Header() {

    const modal  = useRef();
    const {cartItems} = useContext(MealContext);
    const cartQuantity = cartItems.length;
    let modalActions  = <button>Close</button>

    function handleOnCartClick(){
        modal.current.open();
    }

    if(cartQuantity > 0){
        modalActions = <>
            <button className="">Close</button>
            <button className="">Go to checkout</button>
        </>
    }

    return (
        <>
            <CartModal
            ref={modal}
            title= "Your cart"
            action={modalActions}
            ></CartModal>
            <header id="main-header">
                <title>React food</title>
                <div id="title">
                    <img src={logo} alt="Logo of website"/>
                    <h1>React food</h1>
                </div>
                <p >
                    <button className="text-button" onClick={handleOnCartClick}>{`Cart(${cartQuantity})`}</button>
                </p>
            </header>
        </>
    );
}