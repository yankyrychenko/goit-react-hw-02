import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {[...Object.keys(options)].map(option => (
      <button
        key={option}
        data-feedback={option}
        type="button"
        className={style.btn}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
