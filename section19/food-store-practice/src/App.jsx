import {Header} from "./components/Header.jsx";
import {Meals} from "./components/Meals.jsx";
import {MealContextProvider} from "./store/meal-context.jsx";

const cartItemIDs = JSON.parse(localStorage.getItem('cartItemIDs')) || [];

function App() {

    return (
        <>
            <Header/>
            <MealContextProvider>
                <Meals/>
            </MealContextProvider>
        </>
    );
}

export default App;
