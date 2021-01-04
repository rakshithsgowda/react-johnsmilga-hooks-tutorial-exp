import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('indicndic');
  const [iserror, setIserror] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

    <h1>{text || 'john doe'} </h1>
    <button className="btn" onClick={() => setIserror(!iserror)} >toggle error</button>
    {text && <h1>hello world</h1>}
    {iserror && <h1>error....</h1>}
    {!iserror ? <h1>error....</h1> : <p>there is no error</p>}
  </>
};

export default ShortCircuit;
