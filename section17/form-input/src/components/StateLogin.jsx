import {useState} from "react";
import Input from "./Input.jsx";
import {isEmail, hasMinLength} from '../util/validation.js';
import {useInput} from "../hooks/useInput.js";

export default function Login() {

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasErrors: hasEmailError
    } = useInput('', isEmail);

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasErrors: hasPasswordError
    } = useInput('', (value) => hasMinLength(value, 6));

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        if (hasEmailError || hasPasswordError) {
            return;
        }
        console.log( enteredValues);
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input id="email"
               label="Email"
               name="email"
               type="email"
               error={hasEmailError && "Email is invalid"}
               onChange={handleEmailChange}
               onBlur={handleEmailBlur}
               value={emailValue}
        />
        <Input id="password"
               label="Password"
               name="password"
               type="password"
               error={hasPasswordError && "Password must be more than 6 characters"}
               onChange={handlePasswordChange}
               onBlur={handlePasswordBlur}
               value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
