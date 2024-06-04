import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { markAsRead } = this.props;
    if (markAsRead) {
      markAsRead();
    }
  };

  render() {
    const { type, html, value } = this.props;

    if (type && value) {
      return (
        <li data-notification-type={type} onClick={this.handleClick}>
          {value}
        </li>
      );
    } else if (html) {
      return (
        <li
          data-urgent
          dangerouslySetInnerHTML={{ __html: html.__html }}
          onClick={this.handleClick}
        />
      );
    } else {
      return null;
    }
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
