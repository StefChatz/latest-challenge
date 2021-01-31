import React from "react";
import PropTypes from "prop-types";
import "./RatingCard.css";
import { star } from "../../static";

export const RatingCard = ({ rating: { rating, comment } }) => {
  const stars = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={star} alt="" className="RatingCard__star" />);
  }

  return (
    <div className="RatingCard">
      <div className="RatingCard__title">Thank you for your feedback!</div>
      <div className="RatingCard__rating-list">{stars}</div>
      <div className="RatingCard__comment">{comment}</div>
    </div>
  );
};

RatingCard.propTypes = { rating: PropTypes.object.isRequired };
