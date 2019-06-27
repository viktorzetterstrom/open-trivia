import React, { useState } from 'react';
import Question from './Question';
import './Game.css';


const shuffleArray = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function Game({ setRunning, questions}) {
  const [question, setQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState(shuffleArray([
    question.correct_answer,
    ...question.incorrect_answers
  ]));

  const getNextQuestion = () => {
    const newQuestion = questions.pop();
    setQuestion(newQuestion);
    setAnswers(question);
  };

  const processAnswer = () => {
    
  };

  return (
    <div className="game">
      <Question data={question.question} />
      <div>{ answers }</div>
      <AnswerButtons answers={answers} clickHandler={processAnswer}/>
    </div>
  );
}
