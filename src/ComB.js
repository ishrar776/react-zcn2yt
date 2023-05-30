import React, { useState } from 'react';
import './style.css';

export default function ComB(props) {
  //const [display, setDisplay] = useState(null);
  const [values, setValues] = useState({
    txtName: '',
    txtAge: '',
  });
  // props.name1('israr khan');
  //props.age('15-JAN-1984');
  const enterName = (e) => {
    props.name1(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const enterAge = (e) => {
    props.age(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const saveData = (e) => {
    e.preventDefault();
    const allData = { ...values };
    const optionParameter = {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(allData),
    };
    fetch('https://reqres.in/api/posts', optionParameter)
      .then((response) => {
        response.json();
        //setDisplay(response.data);
        console.log('post is sucesss' + response.json());
        //console.log(display);
      })
      .catch((error) => {
        console.log('ppst is not done' + error);
      });
    console.log('values of for is ' + JSON.stringify(allData));
  };
  return (
    <div>
      <h1>Enter values</h1>
      <p>
        <input
          type="text"
          name="txtName"
          value={values.txtName}
          onChange={enterName}
          placeholder="Enter Your Name"
        />
      </p>
      <p>
        <input
          type="text"
          name="txtAge"
          value={values.txtAge}
          onChange={enterAge}
          placeholder="Enter Your Age"
        />
      </p>
      <p>
        <input type="submit" onClick={saveData} />
      </p>
    </div>
  );
}
