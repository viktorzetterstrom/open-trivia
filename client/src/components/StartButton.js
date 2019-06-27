import React from 'react';
import './StartButton.css';

export default function StartButton({ clickHandler }) {
  return <button className="start-button" onClick={() => setTimeout(clickHandler, 200)}>Start</button>;
}
