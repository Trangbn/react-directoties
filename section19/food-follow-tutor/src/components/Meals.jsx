import MealItem from "./MealItem.jsx";
import useHttp from "../hook/useHttp.js";

const requestConfig = {};

export default function Meals() {

    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p>Fetching meals...</p>
    }

    return <ul id="meals">
        {loadedMeals.map(meal => (
            <MealItem meal={meal} key={meal.id} />
        ))}
    </ul>
}