import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
  <>
    {/* <NavLink to="/login">Login</NavLink>
    <NavLink exact to="/register">
      Register
    </NavLink> */}

    <Nav className="mr-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register" exact>
        Register
      </Nav.Link>
    </Nav>
  </>
);

export default NavBar;
