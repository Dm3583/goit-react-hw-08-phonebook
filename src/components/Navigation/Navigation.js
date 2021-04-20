import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ isAuthenticated }) => (
  <>
    {/* <NavLink to="/">Home</NavLink>
    {isAuthenticated && (
      <NavLink exact to="/contacts">
        My Contacts
      </NavLink>
    )} */}

    <Nav className="mr-auto">
      <Nav.Link href="/" to="/">
        Home
      </Nav.Link>
      {isAuthenticated && (
        <Nav.Link href="/contacts" exact>
          My Contacts
        </Nav.Link>
      )}
    </Nav>
  </>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
