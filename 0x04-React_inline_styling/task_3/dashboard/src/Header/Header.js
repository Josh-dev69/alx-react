import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../../assets/holberton-logo.jpg";
const style = StyleSheet.create({
  hr: {
    fontWeight: "800",
    height: "0.3rem",
    backgroundColor: "rgb(226, 70, 70)",
    outline: "none",
    border: "none",
  },
  AppHeader: {
    display: "flex",
    alignItems: "center",
  },
  h1: {
    marginLeft: "1rem",
    fontWeight: "700",
    fontSize: "3rem",
    color: "rgb(226, 70, 70)",
  },
});
function Header() {
  return (
    <>
      <header className={css(style.AppHeader)}>
        <img src={logo} alt="holberton logo" height="200" width="200" />
        <h1 className={css(style.h1)}>School dashboard</h1>
      </header>
      <hr className={css(style.hr)} />
    </>
  );
}

export default Header;
