import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends PureComponent {
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <>
        <div className={css(style.wrapper)}>
          <div className={css(style.menuItem)} onClick={handleDisplayDrawer}>
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
                onClick={handleHideDrawer}
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
                      markAsRead={() => markNotificationAsRead(id)}
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

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;
