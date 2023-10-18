import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
        <NavLink
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
        >
            Home
        </NavLink>
    </nav>
  );
}

export default Sidebar;
