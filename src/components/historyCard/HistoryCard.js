import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

import "./HistoryCard.css";
import { Link } from "react-router-dom";

export const HistoryCard = ({ id, dropoff, createdAt, pickup, total }) => {
  const date = moment(createdAt).format("d MMMM YYYY - H:mm");
  console.log("date", date);

  return (
    <Link to={`/details/${id}`} className="HistoryCard">
      <div className="header">
        {createdAt && <div>{date}</div>}
        {total && (
          <div>
            <strong>{`Total fare:${total}`}</strong>
          </div>
        )}
      </div>
      <div className="body">
        {pickup && <div>{pickup}</div>}
        {dropoff && <div>{dropoff}</div>}
      </div>
    </Link>
  );
};

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
