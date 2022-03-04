import React from 'react'

const Instructions = () => {
  return (
    <div className='Title'>
        <h1>Guess the number</h1>
        <h2>Instructions</h2>
        <p className='instructions'>Write in the textbox below the number, between 1 to 30, that you think the computer is thinking, you have only <span className='span'>three oportunities</span></p>
        <p className='luck'>Good luck!</p>
    </div>
  )
}

export default Instructions