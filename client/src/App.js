import React, { useEffect, useState } from 'react';
import Options from './components/Options';
import Loader from './components/Loader';
import StartButton from './components/StartButton';
import Game from './components/Game';
import './App.css';

function App() {
  const [running, setRunning] = useState(false);
  const [gameOptions, setGameOptions] = useState({
    type: 'any',
    difficulty: 'any',
    category: 'any',
  });
  const [questions, setQuestions] = useState(null);
  const [options, setOptions] = useState(null);

  const hideOptions = () => document.querySelector('.options').classList.add('options--hidden');
  const showOptions = () => document.querySelector('.options').classList.remove('options--hidden');

  const fetchQuestions = ({ type, difficulty, category }) => {
    setQuestions(null);
    const querystring = `type=${type}&difficulty=${difficulty}&category=${category}`;
    fetch(`/api/questions?${querystring}`)
      .then(res => res.json())
      .then(setQuestions);
  };

  const startGame = () => {
    setRunning(true);
    hideOptions();
  };

  useEffect(() => fetchQuestions(gameOptions), [gameOptions]);
  useEffect(() => {
    fetch('/api/options')
      .then(res => res.json())
      .then(setOptions);
  }, []);

  const optionsArea = (disabled) => options !== null
    ? <Options disabled={disabled} changeOptions={setGameOptions} options={options} />
    : <Loader />;

  const gameArea = () => {
    if (questions === null) return <Loader />;
    if (running) return <Game setRunning={setRunning} questions={questions} />;
    return <StartButton clickHandler={startGame} />;
  };

  return (
    <div className="app">
      <h1 className="app__header">&lt;/salt&gt; open trivia</h1>
      { optionsArea(!running) }
      { gameArea() }
    </div>
  );
}

export default App;
