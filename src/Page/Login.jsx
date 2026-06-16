import {React,useState} from 'react'
import Button from '../Component/Button'

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="Container">
        <div className="Login-page">
            <div className="Form">
              <h2>Glad to see you again</h2>
              <div className="Input-field">
                <input 
                type="text"
                placeholder="Email & Username"
                aria-label="Username"
                className="Username-input"
                required
                />
                <input
                type="password"
                placeholder="Password"
                aria-label="Password"
                className="Password-input"
                required
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </span>
                <label >
                  <input type="checkbox"/> Remember me
                </label>  
                <a href="#">Forgot your password?</a>

                <Button text="Login" />
                <p>Don't have an account? <a href="#">Sign up</a></p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
