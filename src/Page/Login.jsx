import {React,useState} from 'react'
import "./Login.css"
import Button from '../Component/Button'
import SocialButton from '../Component/SocialButton';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="Container">
        <div className="Login-page">
            <div className="Form">
              <h2>Login</h2>
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
                <label >
                  <input type="checkbox"/> Remember me
                </label> 
                <div className="flex flex-col items-center justify-center">
                <Button text="Login" />
                </div> 
                <a href="#">Forgot your password?</a>
                <p>--- Or Login With ---</p>
                <SocialButton />

                <p>Don't have an account? <a href="#">Sign up</a></p>
              </div>
            </div>
            <div className="IMG">
                <img src='src/assets/headphone-with-blueberry-cartoon.svg' alt='Headphone Cartoon'/>
              </div>
        </div>
      </div>
    </>
  )
}

export default Login
