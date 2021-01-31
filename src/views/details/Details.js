import { find, isEmpty } from "lodash-es";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DetailsCard, RatingCard } from "../../components";
import { fetchRideDetails, selectRideDetails } from "../../models";
import "./Details.css";
import { leftArrow } from "../../static";

export const Details = ({ match }) => {
  const dispatch = useDispatch();
  const { rideDetailsList, rating } = useSelector(selectRideDetails);

  const hasRating = !isEmpty(rating);
  const id = parseInt(match?.params?.id, 10);
  const { ride } = find(rideDetailsList, ["id", id]) || {};

  useEffect(() => {
    if (ride) return;
    dispatch(fetchRideDetails({ id }));
  }, [id]);

  return (
    <div className="Details">
      <Link to="/" className="Details__back">
        <img src={leftArrow} alt="" className="Details__back-icon" />
        <strong>Back to history</strong>
      </Link>
      {hasRating ? (
        <>
          <RatingCard rating={rating} />
        </>
      ) : (
        <>{ride && <DetailsCard ride={ride} />}</>
      )}
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.object,
};

Details.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
};
