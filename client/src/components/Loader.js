import React from 'react';
import './Loader.css';

export default function Loader({ button= false}) {
  return button
    ? <div className='loader-button'><div className='loader'></div></div>
    : <div className='loader-container'><div className='loader'></div></div>;
}
