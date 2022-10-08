import React from 'react';
import { Link } from 'react-router-dom';
import './side.css'

function Sidebar() {
  let mystyle={display: 'block',
               color: 'white',
               padding: '8px 16px',
               textDecoration: 'none',
               border: '3px solid #555',
              fontSize:'18px'}
              
  return (
    <div>
      <ul className='sul'>
        <li><Link style={mystyle} to="/js">Java Script</Link></li>
        <li><Link style={mystyle} to="/python">Python</Link></li>
        <li><Link style={mystyle} to="/angular">Angular</Link></li>
        <li><Link style={mystyle} to="/c">C</Link></li>
        <li><Link style={mystyle} to="/vue">Vue</Link></li>
        <li><Link style={mystyle} to="/node">Node</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;