import {useState} from "react";

export function useInput(defaultValue, validateFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validateFn(enteredValue);

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}