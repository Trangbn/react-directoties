import {useCallback, useState} from "react";
import QUESTIONS from '../question.js';
import quizCompleted from '../assets/quiz-complete.png';
import Questions from "./Questions.jsx";

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
            <div id="summary">
                <img src={quizCompleted} alt="quiz completed"/>
                <h2>QUIZ is completed</h2>
            </div>
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