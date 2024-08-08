import React from 'react'
import "./Utils.scss"
const Utils = () => {
  return (
    <div>Utils</div>
  )
}



export const Container = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Utils