import {currencyFormat} from '../util/formatting.js';
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {

    const cartCtx = useContext(CartContext);
    function handleAddMealToCart(){
        cartCtx.addItem(meal);
    }

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormat.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button textOnly={false} onClick={handleAddMealToCart}>Add to cart</Button>
            </p>
        </article>
    </li>
}