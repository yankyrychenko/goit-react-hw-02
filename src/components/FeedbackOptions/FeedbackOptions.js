import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button
      type="button"
      className={style.btn}
      data-feedback="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      type="button"
      className={style.btn}
      data-feedback="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      type="button"
      className={style.btn}
      data-feedback="bad"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
