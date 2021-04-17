import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <NavLink to="/login">Login</NavLink>
    <NavLink exact to="/register">
      Register
    </NavLink>
  </>
);

export default NavBar;
