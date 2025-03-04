import {use} from 'react';
import {MealContext} from '../store/meal-context.jsx';

export function Meals() {

    const [meals] = use(MealContext);

    return (
        <div id="meals">
            <p>{meals.length}</p>
            {meals.map((meal, index) => (
                <div className="meal-item">
                    <article>
                        <img src={meal.image} alt="Depictive image"/>
                        <h3>{meal.name}</h3>
                        <div className="meal-item-price">{meal.price}$</div>
                        <p className="meal-item-description">{meal.description}</p>
                        <button className="button meal-item-actions">Add to cart</button>
                    </article>
                </div>
            ))}
        </div>

    );
}