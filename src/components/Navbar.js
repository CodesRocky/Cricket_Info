import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'

function Navbar() {
  return (
      <div className='box'>
        <div className='hdr'>
          <Link className='hlink' to="/home"><b>Cricket-Info</b></Link>
        </div>
        <ul className='ul'>
          <li >
            <Link className='ulink'  to="/home">Home</Link>
          </li>
          <li >
            <Link className='ulink'  to="/match">Matches</Link>
          </li>
          <li  >
            <Link className='ulink' to="/upcoming">Upcoming Matches</Link>
          </li>
          <li  >
            <Link className='ulink' to="/playerrank/batsman">Player Rank</Link>
          </li>
          <li  >
            <Link className='ulink' to="/teamrank">Team Ranking</Link>
          </li>
          <li  >
            <Link className='ulink' to="/series">Series</Link>
          </li>
          <li  >
            <Link className='ulink' to="/quotes">Quotes</Link>
          </li>
        </ul>

      </div>
    


  )
}

export default Navbar;