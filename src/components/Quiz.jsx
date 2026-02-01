import React, { useEffect, useState } from 'react'
import Results from './Results'

const quizData = [
  {
    question: 'Which of the following is a valid variable name in JavaScript?',
    options: ['1variable', '_variable', 'var-name', 'var name'],
    answer: '_variable',
  },
  {
    question: 'In JavaScript, which of the following is a primitive data type?',
    options: ['object', 'array', 'string', 'function'],
    answer: 'string',
  },
  {
    question: 'Which sorting algorithm has an average time complexity of O(n log n)?',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Linear Sort'],
    answer: 'Merge Sort',
  },
  {
    question: 'What is the result of `typeof null` in JavaScript?',
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: "'object'",
  },
  {
    question: 'What is the Stack memory used for?',
    options: [
      'Storing queue-like data',
      'Storing function calls',
      'Storing images',
      'Storing videos',
    ],
    answer: 'Storing function calls',
  },
  {
    question: 'Which operator strictly compares both value and data type?',
    options: ['==', '===', '!=', '='],
    answer: '===',
  },
  {
    question: 'What does JSON stand for?',
    options: [
      'Java Syntax Object Notation',
      'JavaScript Object Notation',
      'JavaScript Online Network',
      'Java Server Object Notation',
    ],
    answer: 'JavaScript Object Notation',
  },
  {
    question: 'Which data structure operates on the FIFO (First In First Out) principle?',
    options: ['Stack', 'Queue', 'Array', 'Linked List'],
    answer: 'Queue',
  },
  {
    question: 'Which statement prints content to the browser console?',
    options: ['print()', 'console.log()', 'echo()', 'show()'],
    answer: 'console.log()',
  },
  {
    question: 'When you write `let x;` in JavaScript, what is the initial value of x?',
    options: ['null', '0', 'undefined', 'false'],
    answer: 'undefined',
  },
  {
    question: 'What is HTML?',
    options: [
      'A programming language for logic processing',
      'A markup language for creating website structure',
      'A JavaScript framework',
      'A web browser',
    ],
    answer: 'A markup language for creating website structure',
  },
  {
    question: 'In algorithms, what does Big O notation measure?',
    options: [
      'Network speed',
      'Image loading time',
      'Algorithm complexity',
      'Computer RAM capacity',
    ],
    answer: 'Algorithm complexity',
  },
]

const Quiz = () => {
  const [optionSelected, setOptionSelected] = useState('')
  const [userAnswers, setUserAnswers] = useState(Array.from({ length: quizData.length }))
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [isQuizEnded, setIsQuizEnded] = useState(false)

  const [score, setScore] = useState(0)

  const handleSelectedOption = (option, index) => {
    if (option === quizData[currentQuestion].answer) {
      setScore((prev) => prev + 1)
    }

    setOptionSelected(option)

    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = index
    setUserAnswers(newUserAnswers)
  }

  const goNext = () => {
    if (currentQuestion === quizData.length - 1) {
      setIsQuizEnded(true)
    } else {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setIsQuizEnded(false)
    setOptionSelected('')
    setScore(0)
    setUserAnswers(Array.from({ length: quizData.length }))
  }

  const rewatchQuiz = () => {
    setCurrentQuestion(0)
    setIsQuizEnded(false)
  }

  useEffect(() => {
    const answer = Number(userAnswers[currentQuestion])
    const pastOptionSelected = quizData[currentQuestion].options[answer]

    if (answer !== undefined) {
      setOptionSelected(pastOptionSelected)
    } else {
      setOptionSelected('')
    }
  }, [currentQuestion, userAnswers])

  // useEffect(() => {
  //   if (optionSelected === quizData[currentQuestion].answer) {
  //     setScore((prev) => prev + 1)
  //   }
  // }, [optionSelected])

  if (isQuizEnded) {
    return (
      <Results
        score={score}
        totalQuestionNum={quizData.length}
        restartQuiz={restartQuiz}
        rewatchQuiz={rewatchQuiz}
      />
    )
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{quizData[currentQuestion].question}</p>

      {quizData[currentQuestion].options.map((option, index) => (
        <button
          key={option}
          className={`option ${optionSelected === option ? 'selected' : ''}`}
          disabled={!!optionSelected && optionSelected !== option}
          onClick={() => handleSelectedOption(option, index)}
        >
          {option}
        </button>
      ))}

      {optionSelected ? (
        optionSelected === quizData[currentQuestion].answer ? (
          <p className="correct-answer">Your answer is correct</p>
        ) : (
          <p className="incorrect-answer">Your answer is incorrect</p>
        )
      ) : (
        ''
      )}

      <div className="nav-buttons">
        <button onClick={goBack} disabled={currentQuestion === 0}>
          Back
        </button>
        <button onClick={goNext} disabled={!optionSelected}>
          {currentQuestion === quizData.length - 1 ? 'Complete Quiz' : 'Next'}
        </button>
      </div>
    </div>
  )
}
export default Quiz
