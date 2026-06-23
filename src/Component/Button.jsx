import React from 'react'
import './Button.css'
/**
 * @param {{
 *   text?: string,
 *   children?: import('react').ReactNode,
 *   iconLeft?: import('react').ReactNode,
 *   variant?: string,
 *   onClick?: () => void,
 *   type?: string,
 * }} props
 */function Button({text = undefined, children = undefined, iconLeft = undefined, variant = undefined, onClick = () => {}, type = "button"} = {}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`my-button ${variant === "outline" ? "outline-button" : ""}`}
    >
      {iconLeft && <span className="button-icon">{iconLeft}</span>}
      {text ?? children}
    </button>
  )
}

export default Button
