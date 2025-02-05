import {useEffect, useState} from "react";

export default function ProgressBar({timer}) {

    const [remainTimer, setRemainTimer] = useState(timer);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainTimer((prevTime) => (prevTime - 5))
        }, 5);

        return ()=> {
            clearInterval(timer);
        }
    }, []);

    return (
        <progress id="question-time" value={remainTimer} max={timer}></progress>
    );
}