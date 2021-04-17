import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink exact to="/contacts">
      My Contacts
    </NavLink>
  </>
);

export default Navigation;
