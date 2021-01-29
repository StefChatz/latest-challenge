import { map } from "lodash-es";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { fetchRideDetails } from "../../models";

export const Details = ({ match }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();

  const id = match?.params?.id;
  const isUnderRated = watch("rating") > 0 && watch("rating") <= 2;

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    dispatch(fetchRideDetails(id));
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
