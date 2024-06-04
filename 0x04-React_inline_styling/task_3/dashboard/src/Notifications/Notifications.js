import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.btnClick = this.btnClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  btnClick() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(style.wrapper)}>
          <div className={css(style.menuItem)}>
            <p>Your notifications</p>
          </div>
          {displayDrawer && (
            <div className={css(style.Notification)}>
              <p>Here is the list of notifications</p>
              <button
                style={{
                  position: "absolute",
                  top: "0.8rem",
                  right: "0.4rem",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
                aria-label="Close"
                onClick={this.btnClick}
              >
                x
              </button>
              <ul className={css(style.ul)}>
                {listNotifications.length === 0 ? (
                  <li>No new notification for now</li>
                ) : (
                  listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      html={html}
                      value={value}
                      markAsRead={() => this.markAsRead(id)}
                    />
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    float: "right",
  },
  menuItem: {
    marginBottom: "0.4rem",
  },
  Notification: {
    border: "3px dotted rgb(226, 70, 70)",
    borderColor: "rgb(226, 70, 70)",
    padding: "0.3rem",
    position: "relative",
    width: "350px",
  },

  ul: {
    fontWeight: "bold",
  },
});
Notification.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;
