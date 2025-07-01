import { useState } from "react";
export function useInput(initalValue, validationFnc) {
  const [enteredValues, setEnteredValues] = useState(initalValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFnc(enteredValues);

  function handleInputChange(event) {
    setEnteredValues(event.target.value);

    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValues,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
