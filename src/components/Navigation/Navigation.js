import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <>
    <NavLink to="/">Home</NavLink>
    {isAuthenticated && (
      <NavLink exact to="/contacts">
        My Contacts
      </NavLink>
    )}
  </>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
