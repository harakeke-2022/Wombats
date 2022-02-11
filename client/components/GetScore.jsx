import React from 'react'

function GetScore () {
    function scorePerformer() {
      const score = Math.floor(Math.random() * (100 - 50)) + 50;
      console.log(score)
    }
    return (
    <>
      <div>
       <button id="randomnumber" onClick={scorePerformer}>Score!</button>
       <p>Your score is: xx. Well done!</p>
      </div>
    </>
  )
}

export default GetScore
