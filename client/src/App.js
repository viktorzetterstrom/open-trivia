import React, { useEffect, useState } from 'react';
import Options from './components/Options';
import Loader from './components/Loader';
import StartButton from './components/StartButton';
import Game from './components/Game';
import Score from './components/Score';
import './App.css';

function App() {
  const [running, setRunning] = useState(false);
  const [gameOptions, setGameOptions] = useState({
    type: 'any',
    difficulty: 'any',
    category: 'any',
  });
  const [questions, setQuestions] = useState(null);
  const [startingOptions, setStartingOptions] = useState(null);
  const [score, setScore] = useState(null);
  const [showScore, setShowScore] = useState(null);

  const hideOptions = () => document.querySelector('.options').classList.add('options--hidden');
  const showOptions = () => document.querySelector('.options').classList.remove('options--hidden');

  const fetchQuestions = ({ type, difficulty, category }) => {
    setQuestions(null);
    const querystring = `type=${type}&difficulty=${difficulty}&category=${category}`;
    fetch(`/api/questions?${querystring}`)
      .then(res => res.json())
      .then(setQuestions);
  };

  useEffect(() => fetchQuestions(gameOptions), [gameOptions]);
  useEffect(() => {
    fetch('/api/options')
      .then(res => res.json())
      .then(setStartingOptions);
  }, []);

  const startGame = () => {
    setRunning(true);
    hideOptions();
  };

  const stopGame = questions => {
    const score = questions.filter(q => q.answered === 'correct').length;
    setScore(score);
    setShowScore(true);
    setRunning(false);
    showOptions();
    fetchQuestions(gameOptions);
  };

  const optionsArea = () => startingOptions !== null
    ? <Options changeOptions={setGameOptions} options={startingOptions} />
    : <Loader />;

  const gameArea = () => {
    if (questions === null) return <Loader button={true} />;
    if (running) return <Game stop={stopGame} questions={questions} />;
    return <StartButton clickHandler={startGame} />;
  };

  const scoreArea = () => {
    if (!showScore) return <></>;
    return <Score setShow={setShowScore} score={score} />;
  };

  return (
    <div className="app">
      <h1 className="app__header">&lt;/salt&gt; open trivia</h1>
      { optionsArea(!running) }
      { gameArea() }
      { scoreArea() }
    </div>
  );
}

export default App;
