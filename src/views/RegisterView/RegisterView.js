import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

const initialState = {
  name: '',
  email: '',
  password: '',
};

class RegisterView extends Component {
  state = {
    ...initialState,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = { ...this.state };
    console.log(user);
    this.props.register(user);
    this.setState({ ...initialState });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, email, password } = this.state;
    return (
      <>
        <h1>Register</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </label>
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
  register: user => dispatch(authOperations.registerUser(user)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
