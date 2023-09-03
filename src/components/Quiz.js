import React, { useState, useEffect } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';
import AnswerTimer from './AnswerTimer';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentTime, setCurrentTime] = useState(10); 
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning && currentTime > 0) {
      const timer = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else if (timerRunning && currentTime === 0) {

      changeQuestion();
    }
  }, [timerRunning, currentTime]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
      setCurrentTime(10); 
      startTimer(); 
    } else {
      setShowResult(true);
      setTimerRunning(false); 
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setCurrentTime(10); 
    startTimer(); 
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div>
      <p className='heading-txt'> Quiz </p>
      <div className='container'>
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <AnswerTimer totalTime={10} currentTime={currentTime} />
            <div className='question'>
              <span id='question-number'>{currentQuestion + 1}.</span>
              <span id='question-txt'>{QuizData[currentQuestion].question}</span>
            </div>
            <div className='option-container'>
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${clickedOption === i + 1 ? 'checked' : null}`}
                    key={i}
                    onClick={() => {
                      setClickedOption(i + 1);
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type='button'
              value='Next'
              id='next-button'
              onClick={changeQuestion}
              disabled={!timerRunning} 
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
