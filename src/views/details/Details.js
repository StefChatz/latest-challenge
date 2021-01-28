import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRideDetails, selectRideDetails } from "../../models";

export const Details = () => {
  const dispatch = useDispatch();
  const { selectedRide, ride } = useSelector(selectRideDetails);

  useEffect(() => {
    dispatch(fetchRideDetails(selectedRide));
  }, [ride]);
  return <div />;
};

Details.propTypes = {};

Details.defaultProps = {};
