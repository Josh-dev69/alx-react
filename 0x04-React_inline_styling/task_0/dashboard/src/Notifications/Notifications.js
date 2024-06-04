import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import "./Notifications.css";

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
        <div className="wrapper">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          {displayDrawer && (
            <div className="Notification">
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
              <ul>
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

Notification.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;
