import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {

    const [investments, setInvestments] = useState({
        initialInvestment: 100,
        annualInvestment: 100,
        expectedReturn: 0,
        duration: 2
    });

    function handleChange(inputIdentifier, newValue) {
        setInvestments(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
        return calculateInvestmentResults({...investments});
    }

  return (
      <>
          <Header/>
          <UserInput investments={investments} handleChange={handleChange} />
          <Results input={investments}/>
      </>
  )
}

export default App
