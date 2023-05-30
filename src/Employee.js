import React, { useState, useEffect } from 'react';
import './style.css';
export default function Employee() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchInfo();
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
            {data.map((item) => (
              <tr>
                <th>{item.name}</th>
                <th>{item.username}</th>
                <th>{item.email}</th>
                <th>{item.address.street}</th>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}
