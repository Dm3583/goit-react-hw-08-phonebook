import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

const initialState = {
  email: '',
  password: '',
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const {email,password} = this.state;
    const user = { ...this.state };
    this.props.login(user);
    // console.log('click');
    // console.log('EMAIL: ',this.state.email,'PASSWORD: ', this.state.password);
    this.setState({ ...initialState });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(authOperations.loginUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginView);
