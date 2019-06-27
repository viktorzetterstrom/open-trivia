import React, { useEffect, useState } from 'react';
import Options from './components/Options';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [options, setOptions] = useState(null);

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
          : <Loader />
      }
    </div>
  );
}

export default App;
