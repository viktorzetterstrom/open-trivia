import React, { useEffect, useState } from 'react';
import Options from './components/Options';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    fetch('/api/questions')
      .then(res => res.text())
      .then(setQuestions);
  }, []);

  useEffect(() => {
    fetch('/api/options')
      .then(res => res.json())
      .then(setOptions);
  }, []);

  return (
    <div className="App">
      <h1>Who wants to be a &lt;/saltionnaire&gt;</h1>
      {
        options
          ? <Options options={options} />
          : <div>Spinner</div>
      }
    </div>
  );
}

export default App;
