import { useContext} from "react";
import {MealContext} from "../store/meal-context.jsx";

export default function Cart({onUpdateItemQuantity}) {

    const {cartItems, updateItemQuantity} = useContext(MealContext);

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * 2, 0
    );

    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <div>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                        <span>{`${item.name} - ${item.price}`}</span>
                        <button className="cart-item-actions" onClick={() => updateItemQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="cart-item-actions" onClick={() => updateItemQuantity(item.id, +1)}>+</button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">{formattedTotalPrice}</div>
        </div>
    );

}