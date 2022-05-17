import React from 'react'
import ButtonCSS from "./Button.module.css"

function Button() {
  return (
    <div className={`d-flex ${ButtonCSS.container}`}>
        <div className={ButtonCSS.items}>
            <i className="bi bi-heart"></i>
            <span>Like</span>
        </div>
        <div className={ButtonCSS.items}>
            <i className="bi bi-bookmark"></i>
            <span>BookMark</span>
        </div>
    </div>
  )
}

export {Button}