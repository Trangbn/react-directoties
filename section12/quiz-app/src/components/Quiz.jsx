import {useState} from "react";
import QUESTIONS from '../question.js';

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    return (
        <div id="questions">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {
                    QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                            <li key={answer.id} className="answer">
                                <button>{answer}</button>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}