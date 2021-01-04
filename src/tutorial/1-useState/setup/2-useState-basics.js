import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('109');
  const handleClick = () => {
    text === 'Random title' ? (setText('hello world')) : setText('Random title')
  }
  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick} >change this value</button>
    </>
  )
};

export default UseStateBasics;
