import React, { useState } from 'react'

function GetScore () {
  const [score, setScore] = useState('')

  function handleClick () {
    setScore(`Your score is ${(Math.floor(Math.random() * (100 - 50)) + 50)}. Well done, you legend!`)
  }

  return (
    <>
      <div className="flex-container2">
        <button className="discoBtn" onClick={console.log('This does nothing!')}>Listening...</button>
        <button className="discoBtn" id="randomnumber" onClick={handleClick} >Score!</button>
        <p ID="scoreText">{score}</p>
      </div>
    </>
  )
}

export default GetScore
