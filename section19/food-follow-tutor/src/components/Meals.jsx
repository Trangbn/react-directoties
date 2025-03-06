import {useEffect, useState} from "react";

export default function Meals({ meals }) {

    const [loadMeals, setLoadMeals] = useState([]);
    useEffect(() => {

        async function fetchMeals(){
            const response = await fetch('http://localhost:3000/meals');
            if (!response.ok) {
                // handle cannot get response
            }
            const meals = await response.json();
            setLoadMeals(meals);
        }
        fetchMeals();
    }, []);


    return <ul id="meals">
        {loadMeals.map(meal => (
            <li key={meal.id}>{meal.name}</li>
        ))}
    </ul>
}