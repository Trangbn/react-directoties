import {useCallback, useState} from "react";
import QUESTIONS from '../question.js';
import quizCompleted from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";

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

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="questions">
                <QuestionTimer timeout={10000} onTimeout={handleSkipSelectAnswer} key={activeQuestionIndex}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {
                        shuffledAnswers.map((answer) => {
                                const isSelected = userAnswers[userAnswers.length - 1] === answer;
                                let cssClass = '';

                                if (answerState === 'answered' && isSelected) {
                                    cssClass = 'selected';
                                }

                                if (isSelected && (answerState === 'correct' || answerState === 'wrong')) {
                                    cssClass = answerState;
                                }

                                return <li key={answer} className="answer">
                                    <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>{answer}</button>
                                </li>
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    );
}