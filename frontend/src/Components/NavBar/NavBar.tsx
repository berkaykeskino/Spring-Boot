import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='nb-container'>
        <div className='nb-amblem'>
            <img src="/music-note.png" alt="" style={{width: "40px"}} />
        </div>
        <div className='nb-search'>Search</div>
        <div className='nb-other-pages'>
            <p>
                <Link to="/createSong" className="nb-link">Create Song</Link>
            </p>
            <p>
                <Link to="/viewSong" className="nb-link">View Song</Link>
            </p>
        </div>
    </div>
  )
}

export default NavBar