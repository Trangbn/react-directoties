import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef( function ResultModal({ targetTime, timeRemaining, onReset}, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        };
    });

    const userLost = timeRemaining <= 0;
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);

    return (
        <dialog ref = {dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stop the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;