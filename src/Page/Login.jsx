import {React,use,useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import "./Login.css"
import Button from '../Component/Button'
import SocialButton from '../Component/SocialButton';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", email, password);
  };

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
                onChange={(e) => setEmail(e.target.value)}
                className="Username-input"
                required
                />
                <input
                type="password"
                placeholder="Password"
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="Password-input"
                required
                />
                <label >
                  <input type="checkbox"/> Remember me
                </label> 
                <div className="flex flex-col items-center justify-center">
                <Button text="Login" onChange={handleSubmit} />
                </div> 
                <a href="#">Forgot your password?</a>
                <p>--- Or Login With ---</p>
                <SocialButton />

                <p>Don't have an account? <Link to="/">Sign up</Link></p>
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
