import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    const enableSubmit = email !== "" && this.state.password !== "";
    this.setState({ email, enableSubmit });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    const enableSubmit = this.state.email !== "" && password !== "";
    this.setState({ password, enableSubmit });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  render() {
    return (
      <div className={css(style.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">email</label>
          <input
            className={css(style.input)}
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            className={css(style.input)}
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <input
            className={css(style.button)}
            type="submit"
            value="Ok"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}
const style = StyleSheet.create({
  AppBody: {
    fontSize: "1.8rem",
    marginLeft: "5rem",
    marginTop: "5rem",
  },
  input: {
    display: "inlineBlock",
    margin: "0 0.5rem 0 0.5rem",
  },
  button: {
    margin: "0 0.5rem 0 0.5rem",
    cursor: "pointer",
  },
});

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;
