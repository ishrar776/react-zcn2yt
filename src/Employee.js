import React, { useState, useEffect } from 'react';
import './style.css';
//import Axios from 'axios';
export default function Employee() {
  const [valuesName, setValuesNmae] = useState('');
  const optionData = {
    method: 'Get',
    headers: { 'Content-Type': 'application/json' },
  };
  useEffect(() => {
    fetch('https://dummyjson.com/products', optionData)
      .then((response) => {
        setValuesNmae(response.data);
      })
      .catch((error) => {
        console.log('We can not fetch api' + error);
      });
  }, []);

  return (
    <div>
      <h1>Employee Details</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="4">Metro Areas by State</th>
            </tr>
            <tr>
              <th>State Name</th>
              <th>State Abbreviation</th>
              <th>City</th>
              <th>Population</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
