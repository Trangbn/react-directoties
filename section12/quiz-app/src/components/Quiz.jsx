import {useCallback, useState} from "react";
import QUESTIONS from '../question.js';
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });
    }, []);

    const handleSkipSelectAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <Summary userAnswers = {userAnswers}/>
        );
    }

    return (
        <div id="quiz">
            <Questions
                       onSelectAnswer={handleSelectAnswer}
                       onSkipAnswer={handleSkipSelectAnswer}
                       key={activeQuestionIndex}
                       index={activeQuestionIndex}
            />
        </div>
    );
}