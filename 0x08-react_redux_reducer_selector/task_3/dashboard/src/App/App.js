import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import AppContext from "./AppContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      listNotifications: [
        { id: 1, type: "urgent", value: "New course Available" },
        { id: 2, type: "urgent", value: "New resume Available" },
        { id: 3, type: "default", html: { __html: getLatestNotification() } },
      ],

      listCourses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "webpack", credit: 20 },
        { id: 3, name: "Reacts", credit: 40 },
      ],
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  }

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter(
      (notification) => notification.id !== id
    );
    this.setState({ listNotifications: newList });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logIn: this.logIn,
          logOut: this.logOut,
        }}
      >
        <Notifications
          markNotificationAsRead={this.markNotificationAsRead}
          listNotifications={this.state.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header />
          {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom>
              <CourseList listCourses={this.state.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom>
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySectionWithMarginBottom>
            <BodySection
              title="News from the School"
              className={css(styles.footer)}
            />
            <p>lorem20 </p>
          </BodySectionWithMarginBottom>
          <Footer className={css(styles.footer)} />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: "1.8rem",
    marginLeft: "5rem",
    marginTop: "5rem",
  },
  footer: {
    height: "45vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
