import Logo from '../../logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to={'/home'}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to={'/reviews'}
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to={'/dashboard'}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to={'/blogs'}
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to={'/about'}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
