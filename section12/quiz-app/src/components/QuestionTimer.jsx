import {useEffect, useState} from "react";

export default function QuestionTimer({timeout, onTimeout}) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(((prevTime) => prevTime - 100))
        }, 100);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime}></progress>
    )

}