import {useEffect, useState} from "react";

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("INTERVAL");
            setRemainingTime(prevTime => prevTime - 10);
        })

        return () => {
            console.log('Clean up timer');
            clearInterval(timer);
        }
    }, []);

    return <progress value={remainingTime} max={timer}/>
}