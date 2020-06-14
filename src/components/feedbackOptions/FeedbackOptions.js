import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ types, onAddFeedback }) => {
  const options = Object.keys(types);

  return (
    <div className={styles.list}>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => onAddFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  types: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onAddFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
