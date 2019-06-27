import React from 'react';
import './AnswerButtons.css';
import he from 'he';

export default function AnswerButtons({ answers, clickHandler }) {

  return (
    <div className="answer-buttons">
      {
        answers.map((answer, i) => <button className="answer-button" key={i} onClick={clickHandler}>{ he.decode(answer) }</button>)
      }
    </div>
  );
}