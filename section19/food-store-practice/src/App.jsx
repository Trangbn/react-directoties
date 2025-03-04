import {Header} from "./components/Header.jsx";
import {Meals} from "./components/Meals.jsx";
import {MealContextProvider} from "./store/meal-context.jsx";

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
