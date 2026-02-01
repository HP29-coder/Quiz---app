import React from 'react'

const Results = ({ score, totalQuestionNum, restartQuiz, rewatchQuiz }) => {
  return (
    <div>
      <h2>Results</h2>
      <p className="result">
        You got {score}/{totalQuestionNum} questions correct 👏 👏 👏{' '}
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={rewatchQuiz}>Review</button>
        <button className="result-button" onClick={restartQuiz}>
          Restart
        </button>
      </div>
    </div>
  )
}

export default Results
