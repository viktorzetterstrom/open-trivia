import React, { useState, useEffect } from 'react';
import Question from './Question';
import AnswerButtons from './AnswerButtons';
import './Game.css';

export default function Game({ setAnswerCorrect, stop, questions }) {
  const [activeQ, setActiveQ] = useState(0);
  const [qList, setQList] = useState(questions);

  useEffect(() => setQList(setupQuestions(questions)), []);

  const getNextQuestion = () => {
    const nextQuestionIndex = questions.map(q => q.answered).indexOf('no');
    setActiveQ(nextQuestionIndex);
    if (nextQuestionIndex === -1) stop(questions);
  };

  const processAnswer = e => {
    if (e.target.textContent === qList[activeQ].correct_answer) {
      qList[activeQ].answered = 'correct';
      document.querySelector('.answer-message').textContent = 'CORRECT';
    } else {
      qList[activeQ].answered = 'incorrect';
      document.querySelector('.answer-message').textContent = 'WRONG';
    }
    flashScreen(qList[activeQ].answered);
    setTimeout(getNextQuestion, 1600);
  };

  return (
    <div className="game">
      {
        activeQ !== -1 && qList[activeQ].answered === 'no'
          ? (
            <>
            <Question data={qList[activeQ].question} />
            <AnswerButtons answers={qList[activeQ].answers} clickHandler={processAnswer} />
            </>
          )
          : <></>
      }
    </div>
  );
}

const shuffleArray = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const getAnswers = question => shuffleArray([
  question.correct_answer,
  ...question.incorrect_answers
]);

const setupQuestions = questions => {
  return questions.map(q => {
    q.answers = getAnswers(q);
    q.answered = 'no';
    return q;
  });
};

const flashScreen = (answerString) => {
  const color = answerString === 'correct'
    ? 'rgb(142, 196, 137)'
    : 'rgb(255, 126, 126)';
  setTimeout(() => {
    document.body.style.backgroundColor = color;
  }, 500);
  setTimeout(() => {
    document.body.style.backgroundColor = 'white';
  }, 1500);
};