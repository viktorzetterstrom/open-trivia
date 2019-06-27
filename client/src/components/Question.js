import React from 'react';
import he from 'he';
import './Question.css';

export default function Question({ data }) {
  return (
    <div className="question">{ he.decode(data) }</div>
  );
}
