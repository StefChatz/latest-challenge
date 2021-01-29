import { find, map } from "lodash-es";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { fetchRideDetails, postComment, selectRideDetails } from "../../models";

export const Details = ({ match }) => {
  const dispatch = useDispatch();
  const { rideDetailsList } = useSelector(selectRideDetails);
  const { register, handleSubmit, watch } = useForm();

  const id = parseInt(match?.params?.id, 10);
  const isUnderRated = watch("rating") > 0 && watch("rating") <= 2;
  const { ride } = find(rideDetailsList, ["id", id]) || {};

  const onSubmit = (data) => dispatch(postComment(data));

  useEffect(() => {
    if (ride) return;
    dispatch(fetchRideDetails({ id }));
  }, [id]);

  const optionsConfig = {
    0: "Rate your Driver!",
    1: "1 star",
    2: "2 stars",
    3: "3 stars",
    4: "4 stars",
    5: "5 stars",
  };

  return (
    <>
      {ride?.dropoff}
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          name="rating"
          ref={register({
            min: 1,
          })}
          defaultValue={0}
        >
          {map(optionsConfig, (value, key) => (
            <option key={key + value} value={key}>
              {value}
            </option>
          ))}
        </select>
        {isUnderRated && <input name="comment" ref={register} />}
        <input type="submit" />
      </form>
    </>
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
