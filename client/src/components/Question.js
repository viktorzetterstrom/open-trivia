import React from 'react';
import he from 'he';

export default function Question({ data }) {
  return (
    <div>{ he.decode(data) }</div>
  );
}
