import quizCompleted from "../assets/quiz-complete.png";
import QUESTIONS from '../question.js';

export default function Summary({userAnswers}){

    const skippedQuestions = userAnswers.filter((answer)=> answer === null);
    const correctAnswers = userAnswers.filter((answer, index)=> answer === QUESTIONS[index].answers[0]);
    const skippedPercent = Math.round(skippedQuestions.length/ QUESTIONS.length * 100);
    const correctPercent = Math.round(correctAnswers.length / QUESTIONS.length * 100);
    const incorrectPercent = 100 - skippedPercent - correctPercent;

    return (<div id="summary">
        <img src={quizCompleted} alt="quiz completed"/>
        <h2>QUIZ is completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedPercent}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{correctPercent}%</span>
                <span className="text">correct answer</span>
            </p>
            <p>
                <span className="number">{incorrectPercent}%</span>
                <span className="text">incorrect answer</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {

                let cssClass = 'user-answer';
                if (answer == null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }

                return <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer ?? 'Skipped'}</p>
                </li>
            })}
        </ol>
    </div>);
}