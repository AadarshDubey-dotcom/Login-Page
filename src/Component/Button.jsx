import React from 'react'

function Button({text, onClick, type="button"}) {
  return (
    <>
      <button
       type={type}
       onClick={onClick}
       className="my-button"
      >
        HELLO
      </button>

    </>
  )
}

export default Button
