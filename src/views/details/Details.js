import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchRideDetails } from "../../models";

export const Details = ({ match }) => {
  const dispatch = useDispatch();
  const id = match?.params?.id || 0;

  useEffect(() => {
    dispatch(fetchRideDetails(id));
  }, [id]);
  return <div />;
};

Details.propTypes = {
  match: PropTypes.object,
};

Details.defaultProps = {
  match: {},
};
