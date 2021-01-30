import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { currencyFormater, dateFormater } from "../../utils";
import "./HistoryCard.css";

export const HistoryCard = ({ id, dropoff, createdAt, pickup, total }) => (
  <Link to={`/details/${id}`} className="HistoryCard">
    <div className="header">
      {createdAt && <div>{dateFormater(createdAt)}</div>}
      {total && (
        <div>
          <strong>{`Total fare: €${currencyFormater(total)}`}</strong>
        </div>
      )}
    </div>
    <div className="body">
      {pickup && <div>{pickup}</div>}
      {dropoff && <div>{dropoff}</div>}
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
