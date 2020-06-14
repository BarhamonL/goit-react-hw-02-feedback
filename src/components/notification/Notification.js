import React from "react";
import PropTypes from "prop-types";

function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
