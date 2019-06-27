import React, { useState, useEffect } from 'react';
import './Options.css';

export default function Options({ changeOptions, options }) {
  const [difficulty, setDifficulty] = useState('any');
  const [type, setType] = useState('any');
  const [category, setCategory] = useState('any');

  useEffect(() => {
    changeOptions({ difficulty, type, category });
  }, [difficulty, type, category]);

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'difficulty': setDifficulty(e.target.value); break;
      case 'type': setType(e.target.value); break;
      case 'category': setCategory(e.target.value); break;
      default:
    }
  };

  return (
    <div className="options">
      <h2 className="options__header">Options</h2>
      <form onChange={handleChange} className="options__form" >
        <label className="options__form__label">Difficulty:
          <select  id="difficulty" className="options__form__select" name="difficulty">
            { options.difficulty.map((d, i) => <option key={i} value={d}>{d}</option>) }
          </select>
        </label>

        <label className="options__form__label">Type:
          <select onChange={handleChange} id="type" className="options__form__select" name="type">
            { options.type.map((t, i) => <option key={i} value={t}>{t}</option>) }
          </select>
        </label>

        <label className="options__form__label">Category:
          <select onChange={handleChange} id="category" className="options__form__select" name="category">
            { options.category.map((c, i) => <option key={i} value={c.id}>{c.name}</option>)}
          </select>
        </label>
      </form>
    </div>
  );
}
