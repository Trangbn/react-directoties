import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import Cart from "./Cart.jsx";

const CartModal = forwardRef(function CartModal({title, action}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open: () => dialog.current.showModal()
        }
    });

    return createPortal(
        <dialog className="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart/>
            <form method="dialog" >
                {action}
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default CartModal;