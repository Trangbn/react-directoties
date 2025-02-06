import {useCallback, useState} from "react";
import QUESTIONS from '../question.js';
import quizCompleted from '../assets/quiz-complete.png';
import Questions from "./Questions.jsx";

export default function Quiz() {

    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(()=>{
                setAnswerState('');
            }, 2000)
        }, 1000);

    }, [activeQuestionIndex]);

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
            <Questions questionText={QUESTIONS[activeQuestionIndex].text}
                       answers={QUESTIONS[activeQuestionIndex].answers}
                       onSelectAnswer={handleSelectAnswer}
                       selectedAnswer={userAnswers[userAnswers.length - 1]}
                       answerState={answerState}
                       onSkipAnswer={handleSkipSelectAnswer}
                       key={activeQuestionIndex}
            />
        </div>
    );
}