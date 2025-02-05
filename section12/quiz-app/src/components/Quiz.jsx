import {useState} from "react";
import QUESTIONS from '../question.js';

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(answer) {
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, answer];
        });
    }

    return (
        <div id="quiz">
            <div id="questions">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {
                        QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                                <li key={answer.id} className="answer">
                                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}