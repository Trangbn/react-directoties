import {useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

function CartModal({title, action}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open: () => dialog.current.showModal()
        }
    });

    return createPortal(
        <dialog id="" ref={dialog} >
            <h2>{title}</h2>

        </dialog>
    )
}

export default CartModal;