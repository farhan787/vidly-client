import React, { useState } from 'react';
import Users from './Components/Users';
import './App.css';

function App() {
  console.log(Users);
  return (
    <div>
      <h1>Vidly Client</h1>
      <Users />
    </div>
  );
}

export default App;
