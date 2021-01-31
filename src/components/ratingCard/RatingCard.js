import React from "react";
import PropTypes from "prop-types";

export const RatingCard = ({ rating: { rating, comment } }) => (
  <div className="RatingCard">
    Thank you for your feedback
    <div>{rating}</div>
    <div>{comment}</div>
  </div>
);

RatingCard.propTypes = { rating: PropTypes.object.isRequired };

RatingCard.defaultProps = {};
