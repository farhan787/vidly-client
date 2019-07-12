import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const URL = 'https://vidly-app.herokuapp.com/api/users';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(URL);
      data = await data.json();
      return setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>GET Users</h2>
      <p>
        Users are being fetched here from <strong>{URL}</strong>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <td>{i + 1}</td>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
