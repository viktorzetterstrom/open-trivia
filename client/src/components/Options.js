import React, { useState } from 'react';
import useInput from '../hooks/use-input';

export default function Options({ options }) {

  const { value:difficulty, bind:bindDifficulty, reset:resetDifficulty } = useInput('any');
  const { value:type, bind:bindType, reset:resetType } = useInput('any');
  const { value:category, bind:bindCategory, reset:resetCategory } = useInput(9);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting ${difficulty} ${type} ${category}`);
  };

  return (
    <div>
      <h2>Options</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="difficulty">Difficulty</label>
        <select {...bindDifficulty} id="difficulty" name="difficulty">
          { options.difficulty.map((d, i) => <option key={i} value={d}>{d}</option>) }
        </select>

        <label htmlFor="type">Type</label>
        <select {...bindType} id="type" name="type">
          { options.type.map((t, i) => <option key={i} value={t}>{t}</option>) }
        </select>

        <label htmlFor="category">Category</label>
        <select {...bindCategory} id="category" name="category">
          { options.category.map((c, i) => <option key={i} value={c.id}>{c.name}</option>)}
        </select>

        <button>Change settings</button>
      </form>
    </div>
  );
}
