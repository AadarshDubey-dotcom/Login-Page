import React from 'react'
import Button from '../Component/Button'
import SocialButton from '@/Component/SocialButton'
import './Signup.css'

function Signup() {
  return (
    <>
    <div className='signup-container'>
      <div className='signup-form'>
        <form className="Signup-Form">
          <h2>Create Account</h2>
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
          <input type="checkbox" /> I agree to Terms & Conditions
        </lable>
        <Button text='Signup'/>
         <div className="social-signup">
          <p>Or Sign Up With</p>
          <SocialButton />
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
