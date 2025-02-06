import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Questions({questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer}) {

    return <div id="questions">
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
        <h2>{questionText}</h2>
        <Answers answer={answers}
                 answerState={answerState}
                 selectedAnswer={selectedAnswer}
                 onSelect={onSelectAnswer}/>
    </div>

}