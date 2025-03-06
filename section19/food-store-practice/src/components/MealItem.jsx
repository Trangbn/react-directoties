import {useContext} from "react";
import {MealContext} from "../store/meal-context.jsx";

export function MealItem({item}) {

    const {addItemToCart} = useContext(MealContext);

    return (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${item.image}`} alt="Depictive image"/>
                <h3>{item.name}</h3>
                <div className="meal-item-price">{item.price}$</div>
                <p className="meal-item-description">{item.description}</p>
                <button className="button meal-item-actions" onClick={() => addItemToCart(item.id)}>Add to cart</button>
            </article>
        </div>
    );

}