import {use} from 'react';
import {MealContext} from '../store/meal-context.jsx';
import {MealItem} from "./MealItem.jsx";

export function Meals() {

    const {meals} = use(MealContext);

    return (
        <div id="meals">
            {meals && meals.map((meal, index) => (
                <MealItem meal={meal} key={index}></MealItem>
            ))}
        </div>

    );
}