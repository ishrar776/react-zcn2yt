import React, { useState, useEffect } from 'react';
import './style.css';
import Axios from 'axios';
export default function Employee() {
  const [valuesName, setValuesNmae] = useState('');
  useEffect(() => {
    Axios.get;
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
