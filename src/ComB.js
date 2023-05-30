import React from 'react';
import './style.css';

export default function ComB(props) {
  // props.name1('israr khan');
  //props.age('15-JAN-1984');
  const enterName = (e) => {
    props.name1(e.target.value);
  };
  const enterAge = (e) => {
    props.age(e.target.value);
  };
  return (
    <div>
      <h1>Enter values</h1>
      <p>
        <input type="text" onChange={enterName} />
      </p>
      <p>
        <input type="text" onChange={enterAge} />
      </p>

      <div></div>
    </div>
  );
}
