import {useContext} from "react";
import {MealContext} from "../store/meal-context.jsx";

export default function Cart({onUpdateItemQuantity}) {

    const {items, updateItemQuantity} = useContext(MealContext);
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );

    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="cart-item">
                        <p>{`${item.name} - ${item.price}`}</p>
                    </li>
                ))}
            </ul>
            <div className="cart-total">{formattedTotalPrice}</div>
        </div>
    );

}