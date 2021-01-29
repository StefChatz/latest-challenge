import PropTypes from "prop-types";
import React from "react";
import "./HistoryCard.css";
import { Link } from "react-router-dom";

export const HistoryCard = ({ id, dropoff, createdAt, pickup, total }) => (
  <Link to={`/details/${id}`} className="HistoryCard">
    <div className="header">
      {total}
      {createdAt}
    </div>
    <div className="body">
      {pickup}
      {dropoff}
    </div>
  </Link>
);

HistoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  dropoff: PropTypes.string,
  createdAt: PropTypes.string,
  pickup: PropTypes.string,
  total: PropTypes.string,
};

HistoryCard.defaultProps = {
  dropoff: "",
  createdAt: "",
  pickup: "",
  total: "",
};