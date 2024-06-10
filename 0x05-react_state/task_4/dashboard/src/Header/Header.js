import React, { useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../../assets/holberton-logo.jpg";
import AppContext from "../App/AppContext";

const styles = StyleSheet.create({
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
  logoutSection: {
    textAlign: "right",
    marginRight: "1rem",
  },
});

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <header className={css(styles.AppHeader)}>
        <img src={logo} alt="holberton logo" height="200" width="200" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
      </header>
      <hr className={css(styles.hr)} />
      {user.isLoggedIn && (
        <section className={css(styles.logoutSection)} id="logoutSection">
          Welcome {user.email} (
          <span className="logoutLink" onClick={logOut}>
            logout
          </span>
          )
        </section>
      )}
    </>
  );
}

export default Header;
