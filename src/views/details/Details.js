import { find } from "lodash-es";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { DetailsCard } from "../../components";
import { fetchRideDetails, selectRideDetails } from "../../models";

export const Details = ({ match }) => {
  const dispatch = useDispatch();
  const { rideDetailsList } = useSelector(selectRideDetails);

  const id = parseInt(match?.params?.id, 10);
  const { ride } = find(rideDetailsList, ["id", id]) || {};

  useEffect(() => {
    if (ride) return;
    dispatch(fetchRideDetails({ id }));
  }, [id]);

  return <DetailsCard ride={ride} />;
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
