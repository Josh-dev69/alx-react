import React from "react";
import { StyleSheet, css } from "aphrodite";
function Login() {
  return (
    <>
      <div className={css(style.AppBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input className={css(style.input)} type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input className={css(style.input)} type="password" id="password" />
        <button type="button">OK</button>
      </div>
    </>
  );
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
});
export default Login;
