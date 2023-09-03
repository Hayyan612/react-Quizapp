// AnswerTimer.js
import React from 'react';

const AnswerTimer = ({ totalTime, currentTime }) => {
  // Calculate the percentage of time elapsed
  const percentage = (currentTime / totalTime) * 100;

  return (
    <div className="answer-timer">
      <div className="timer-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default AnswerTimer;
