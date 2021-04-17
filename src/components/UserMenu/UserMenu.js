import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ name, logout }) => {
  return (
    <>
      <span>Welcome {name}</span>
      <NavLink to="/" onClick={logout}>
        Logout
      </NavLink>
    </>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authOperations.logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
