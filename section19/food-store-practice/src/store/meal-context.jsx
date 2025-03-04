import {createContext, useEffect, useState} from 'react';

export const MealContext = createContext({
    meals: null
});

export function MealContextProvider({children}) {

    const [meals, setMeals] = useState();

    useEffect(() => {
        async function loadMeals() {
            const response = await fetch('http://localhost:3000/meals');
            const data = await response.json();
            setMeals(data);
        }
        loadMeals();
    }, []);


    const contextValue = {
        meals: meals
    }

    return <MealContext value={contextValue}>{children}</MealContext>;
}