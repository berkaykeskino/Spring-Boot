import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import CreateSong from './Components/CreateSong/CreateSong';

function App() {
  return (
    <div>
      this is app.txt
      <CreateSong/>
      <Outlet />
    </div>
      
  );
}

export default App;
