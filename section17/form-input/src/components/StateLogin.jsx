import Input from "./Input.jsx";
import {isEmail, isNotEmpty} from '../util/validation.js';
import {useInput} from "../hooks/useInput.js";

export default function Login() {


    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => isNotEmpty(value));


    function handleSubmit(e) {
        e.preventDefault();
        if (emailHasError || passwordHasError) {
            return;
        }

        console.log((emailValue || passwordValue));
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input id="email"
               label="Email"
               name="email"
               type="email"
               error={emailHasError && "Email is invalid"}
               onChange={handleEmailChange}
               onBlur={handleEmailBlur}
               value={emailValue}
        />
        <Input id="password"
               label="Password"
               name="password"
               type="password"
               error={passwordHasError && "Password must be more than 6 characters"}
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
