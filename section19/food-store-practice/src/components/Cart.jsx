import { useContext} from "react";
import {MealContext} from "../store/meal-context.jsx";

export default function Cart({onUpdateItemQuantity}) {

    const {items, updateItemQuantity} = useContext(MealContext);

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * 2, 0
    );

    console.log(items, totalPrice);

    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <div>
            <ul>
                {items.map((item) => (
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