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
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((d) => setData(d));
    //fetchInfo();
    fetch(url)
      .then((response) => response.json())
      .then((d) => setData(d))
      .catch((error) => console.log(error));
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
