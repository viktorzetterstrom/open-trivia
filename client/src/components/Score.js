import React, { useState } from 'react';
import './Score.css'


export default function Score({ setShow, score }) {

  let message = 'I don\'t know your score';
  if (score <= 4) message = 'You stink!';
  else if (score <= 8) message = 'Not bad!';
  else if (score <= 10) message = 'Incredible job!';

  return (
    <div class="score__background">
      <div className="score">
        <h2 className="score__header">You scored:</h2>
        <h2 className="score__header score__header--number">{score}</h2>
        <p className="score__message">{message}</p>
        <button onClick={() => setTimeout(() => setShow(false), 500)} className="score__button">Click to keep playing</button>
      </div>
    </div>
  );
}