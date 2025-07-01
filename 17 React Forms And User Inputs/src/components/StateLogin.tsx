import Input from "./Input";
import {isEmail, isNotEmpty , hasMinLength} from '../util/validation'
import {useInput} from '../hooks/useInput'

// third party React Form hooks || formik

export default function Login() {

  const {value: emailValue, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, hasError: hasEmailError} = useInput('' , (value) => isEmail(value) && isNotEmpty(value));
  const {value: passwordValue, handleInputBlur: handlePasswordBlur, handleInputChange: handlePasswordChange , hasError: hasPasswordError} = useInput('', (value) => hasMinLength(value, 6));



  function handleSubmit(event) {
    event.preventDefault();
    if(hasEmailError || hasPasswordError){
      return;
    }
    console.log(emailValue, passwordValue);
  }

  

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          error={hasEmailError && 'Please enter a valid email'}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordChange}
          error={hasPasswordError && 'Please enter a valid password'}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
