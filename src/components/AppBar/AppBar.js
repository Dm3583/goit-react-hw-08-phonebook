import React from 'react';
import { connect } from 'react-redux';
import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => (
  <nav>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
