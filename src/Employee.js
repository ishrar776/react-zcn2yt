import React, { useState, useEffect } from 'react';
import './style.css';
export default function Employee() {
  //const url = 'https://jsonplaceholder.typicode.com/users';
  const url = 'https://dummyjson.com/products';
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((d) => setData(d.products))
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
              <tr key={item.id}>
                <th>{item.description}</th>
                {/* <th>{item.name}</th>
                <th>{item.username}</th>
                <th>{item.email}</th>
                <th>{item.address.street}</th> */}
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}
