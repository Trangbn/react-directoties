import {useState} from "react";

export function useInput(defaultValue) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    function handleInputChange(value) {
        setEnteredValues(value);
        setDidEdit(false);
    }

    function handleInputBlur(identifier) {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur
    }
}