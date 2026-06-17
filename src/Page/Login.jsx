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
                <p>--- Or Login With ---</p>
                <button className="google-btn">Login with google</button>
                <button className="Github-btn">Login with Github</button>
                <button className="Linkdin-btn">Login with Linkdin</button>

                <Button text="Login" />
                <p>Don't have an account? <a href="#">Sign up</a></p>
              </div>
              <div className="IMG">
                <img src='src/assets/headphone-with-blueberry-cartoon.svg' alt='Headphone Cartoon'/>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
