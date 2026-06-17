import React from 'react'

function Signup() {
  return (
    <>
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
      </form>
    </>
  )
}

export default Signup
