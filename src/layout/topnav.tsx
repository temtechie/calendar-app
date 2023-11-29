// TopNav.js

import React from 'react';
import './top-nav.css';
function TopNav({ onToggleSidebar }: any) {
  return (
    <div className='top-nav'>
      <button className='hamburger-icon' onClick={onToggleSidebar}>
        &#9776;
      </button>
      {/* Add other top navigation content here */}
      <div>hello top nav</div>
    </div>
  );
}

export default TopNav;
