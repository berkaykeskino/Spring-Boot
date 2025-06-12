import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
      
  );
}

export default App;
