import React from 'react';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      this is app.txt
      <Outlet />
    </div>
      
  );
}

export default App;
