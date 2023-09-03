import React from 'react'

function QuizResult(props) {
  return (
    <>
    <p className='heading-txt'> Result </p>
    <div className='show-score'>
        Score: {props.score}/{props.totalScore}<br/>
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult