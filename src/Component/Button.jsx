import React from 'react'

function Button({text}) {
  return (
    <>
      <button onClick={() => alert('Button clicked!')}
        className="my-button"
        >{text}</button>

    </>
  )
}

export default Button
