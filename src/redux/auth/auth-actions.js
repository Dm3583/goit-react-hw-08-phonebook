import { createAction } from '@reduxjs/toolkit';

// Register
const registerUserRequest = createAction('auth/registerUserRequest');
const registerUserSuccess = createAction('auth/registerUserSuccess');
const registerUserError = createAction('auth/registerUserError');

// Login
const loginUserRequest = createAction('auth/loginUserRequest');
const loginUserSuccess = createAction('auth/loginUserSuccess');
const loginUserError = createAction('auth/loginUserError');

// Logout
const logoutUserRequest = createAction('auth/logoutUserRequest');
const logoutUserSuccess = createAction('auth/logoutUserSuccess');
const logoutUserError = createAction('auth/logoutUserError');

// Get current user
const getCurrentUserRequest = createAction('auth/logoutUserRequest');
const getCurrentUserSuccess = createAction('auth/logoutUserSuccess');
const getCurrentUserError = createAction('auth/logoutUserError');

export default {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
