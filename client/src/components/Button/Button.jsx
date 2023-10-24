import React from 'react'
import './button.scss'

const Button = ({children,buttonType,...otherProps}) => {
    const BUTTON_TYPE_CLASSES={
        google:"google-sign-in",
        inverted:"inverted",
        alertBox:"alert-box",
        invertedAddToCart:"inverted-add-to-cart"
    }
  return (
    <div className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}>{children}</div>
  )
}

export default Button