import React, { useState, useEffect } from 'react';
import './style.css';
import ComB from './ComB';

export default function App() {
  const [valuesName, setValuesNmae] = useState('');
  const [age, setAge] = useState('');
  return (
    <div>
      <h1>Result of Student</h1>
      {valuesName && <p>Your name is {valuesName}</p>}
      {age && <p>Your age is {age}</p>}
      <div>
        <ComB name1={setValuesNmae} age={setAge} />
      </div>
    </div>
  );
}
