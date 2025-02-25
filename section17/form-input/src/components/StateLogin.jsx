import {useState} from "react";
import Input from "./Input.jsx";
import {isEmail, hasMinLength} from '../util/validation.js';

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });

    const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email);
    const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

    function handleSubmit(e) {
        e.preventDefault();
        console.log( enteredValues);
    }

    function handleInputChange(identifier, value) {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: value
        }));
        setDidEdit(prevEdit =>({
            ...prevEdit,
            [identifier]: false
        }));
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true
        }));
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input id="email"
               label="Email"
               name="email"
               type="email"
               error={emailIsInvalid && "Email is invalid"}
               onChange={(event) => handleInputChange('email', event.target.value)}
               onBlur={() => handleInputBlur('email')}
               value={enteredValues.email}
        />
        <Input id="password"
               label="Password"
               name="password"
               type="password"
               error={passwordIsInvalid && "Password must be more than 6 characters"}
               onChange={(event) => handleInputChange('password', event.target.value)}
               onBlur={() => handleInputBlur('password')}
               value={enteredValues.password}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
