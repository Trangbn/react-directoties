import MealItem from "./MealItem.jsx";
import useHttp from "../hook/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {

    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if (error) {
        return <Error title="Failed to fetch meal" message={error} />;
    }

    return <ul id="meals">
        {loadedMeals.map(meal => (
            <MealItem meal={meal} key={meal.id} />
        ))}
    </ul>
}