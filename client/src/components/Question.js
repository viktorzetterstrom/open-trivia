import React from 'react';
import he from 'he';
import './Question.css';

export default function Question({ data, index }) {
  return (
    <div className="question">
      <span className="question-number">
        [{Number.parseInt(index) + 1}/10]:&nbsp;
      </span>
        { he.decode(data) }
    </div>
  );
}
