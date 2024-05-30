import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  if (type && value) {
    return <li data-notification-type={type}>{value}</li>;
  } else if (html) {
    return <li data-urgent dangerouslySetInnerHTML={html} />;
  } else {
    return null;
  }
}

NotificationItem.PropTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
