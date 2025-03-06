import {use} from 'react';
import {MealContext} from '../store/meal-context.jsx';
import {MealItem} from "./MealItem.jsx";

export function Meals() {

    const {items} = use(MealContext);

    return (
        <div id="meals">
            {items && items.map((items, index) => (
                <MealItem item={items} key={index}></MealItem>
            ))}
        </div>

    );
}