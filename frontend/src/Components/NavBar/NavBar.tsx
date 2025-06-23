import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className='nb-container'>
      <div className='nb-amblem'>
        <img src="/music-note.png" alt="logo" style={{ width: "40px" }} />
      </div>

      <div className='nb-search'>Search</div>

      <div className='nb-other-pages'>
        <div className="nb-dropdown">
          <span className="nb-dropdown-title">Song</span>
          <div className="nb-dropdown-content">
            <Link to="/createSong" className="nb-link">Create Song</Link>
            <Link to="/viewSong" className="nb-link">View Song</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
