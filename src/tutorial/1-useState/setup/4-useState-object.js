import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: '24',
    message: 'random message'
  });
  const [name, setName] = useState('peter')
  const [age, setAge] = useState('35')
  const [message, setMessage] = useState('this is beatiful')

  const changeMessage = () => {
    setPerson({ ...person, message: 'HELLOW INDIA' });
    setMessage('hi this is raksh')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage} >change button</button>
    </>)
};

export default UseStateObject;
