import React from 'react';

export default function Options({ options }) {

  const { difficulty, type, category } = options;


  return (
    <div>
      <h2>Options</h2>
      <form>
        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty" name="difficulty">
          {
            difficulty.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))
          }
        </select>

        <label htmlFor="type">Type</label>
        <select id="type" name="type">
          {
            type.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))
          }
        </select>

        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          {
            category.map((c, i) => (
              <option key={i} value={c.id}>{c.name}</option>
            ))
          }
        </select>
      </form>
    </div>
  );
}
