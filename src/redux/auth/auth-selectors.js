import { createSelector } from '@reduxjs/toolkit';

const getUserName = state => state.auth.user.name;

const getIsAuthenticated = state => state.auth.isAuthenticated;

export default {
  getUserName,
  getIsAuthenticated,
};
