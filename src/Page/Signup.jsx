import React from 'react'
import Button from '../Component/Button'

function Signup() {
  return (
    <>
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Create Account</h2>
        <form className="Signup-Form">
        <input 
        type="text"
        placeholder='Full Name'
        className="input-field"
        />
        <input
        type="email"
        placeholder='Enter Email'
        className="input-field"
        />
        <input 
        type="password"
        placeholder="Password"
        className='input-field'
        />
        <input
        type="password"
        placeholder='comform password'
        className='input-field'
        />

        <lable className="term">
          <input typr="checkbox" /> I agree to Terms & Conditions
        </lable>
        <Button text='Signup'/>
         <div className="social-signup">
          <p>Or Sign Up With</p>
          <div className="social-buttons">
            <button className="google">Google</button>
            <button className="github">GitHub</button>
            <button className="linkedin">LinkedIn</button>
          </div>
        </div>
        <p className="redirect">
          Already have an account? <a href="/login">Login</a>
        </p>
       </form>
       <div className="IMG">
                <img src='src/assets/Wumpus Hi.gif' alt='Headphone Cartoon'/>
              </div>
      </div>
      </div>
    </>
  )
}

export default Signup
