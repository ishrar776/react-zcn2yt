import React, { useState, useEffect } from 'react';
import './style.css';
import ComB from './ComB';
import Employee from './Employee';

export default function App() {
  const [valuesName, setValuesNmae] = useState('');
  const [age, setAge] = useState('');
  const [drpValue, SetdrpValue] = useState('');
  return (
    <div>
      <h1>Result of Student</h1>
      {valuesName && <p>Your name is {valuesName}</p>}
      {age && <p>Your age is {age}</p>}
      {drpValue && <p>Your dropdown value is {drpValue}</p>}
      <div>
        <ComB name1={setValuesNmae} age={setAge} selectvlu={SetdrpValue} />
      </div>
      <div>
        <Employee />
      </div>
    </div>
  );
}
