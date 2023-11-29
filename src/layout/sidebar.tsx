// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar({ routes, isOpen, onClose }: any) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className='close-btn' onClick={onClose}>
        &times;
      </button>
      <ul>
        {routes.map((route: any) => (
          <li key={route.path}>
            <Link to={`/dashboard/${route.path}`} onClick={onClose}>
              {route.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
