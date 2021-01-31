import React from "react";
import PropTypes from "prop-types";
import "./RatingCard.css";

export const RatingCard = ({ rating: { rating, comment } }) => (
  <div className="RatingCard">
    <div className="RatingCard__title">Thank you for your feedback!</div>
    <div className="RatingCard__rating">{rating}</div>
    <div className="RatingCard__comment">{comment}</div>
  </div>
);

RatingCard.propTypes = { rating: PropTypes.object.isRequired };

RatingCard.defaultProps = {};
