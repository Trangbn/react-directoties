import {useState} from "react";
import Input from "./Input.jsx";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

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

        <Input id="email" label="email" name="email" type="email"/>
        <Input id="password"
               label="Password"
               name="password"
               type="password"
               onChange={(event) => handleInputChange('password', event.target.value)}
               onBlur={() => handleInputBlur('password')}
               value={enteredValues.password}
        />

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
                 onChange={(event) => handleInputChange('password', event.target.value)}
                 onBlur={() => handleInputBlur('password')}
                 value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
