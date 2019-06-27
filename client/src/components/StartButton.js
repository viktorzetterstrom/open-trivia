import React from 'react';
import './StartButton.css';

export default function StartButton({ clickHandler }) {
  return <button className="start-button" onClick={clickHandler}>Start</button>;
}
