import {useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import Cart from "./Cart.jsx";

function CartModal({title, action}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open: () => dialog.current.showModal()
        }
    });

    return createPortal(
        <dialog className="cart" ref={dialog} >
            <h2>{title}</h2>
            <Cart/>
        </dialog>
    )
}

export default CartModal;