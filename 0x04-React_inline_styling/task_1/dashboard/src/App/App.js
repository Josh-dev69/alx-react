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
const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "urgent", value: "New course Available" },
  { id: 2, type: "urgent", value: "New resume Available" },
  { id: 3, type: "default", html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown); // Corrected removeEventListener
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />

          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course List">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
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
      </>
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
  isLoggedIn: true,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
