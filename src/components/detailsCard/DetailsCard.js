import { map as _map } from "lodash-es";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./DetailsCard.css";
import { postComment } from "../../models";
import { currencyFormater, dateFormater } from "../../utils";

export const DetailsCard = ({
  ride: { created_at, dropoff, map, total, pickup },
}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();

  const isUnderRated = watch("rating") > 0 && watch("rating") <= 2;

  const onSubmit = (data) => dispatch(postComment(data));

  const optionsConfig = {
    0: "Rate your Driver!",
    1: "1 star",
    2: "2 stars",
    3: "3 stars",
    4: "4 stars",
    5: "5 stars",
  };

  return (
    <div className="DetailsCard">
      <div className="DetailsCard__header">{dateFormater(created_at)}</div>
      <div className="DetailsCard__info">
        <div>{pickup}</div>
        <div>{dropoff}</div>
        <div>
          <strong>{`Total fare: ${currencyFormater(total)}`}</strong>
        </div>
        <div
          style={{ backgroundImage: `url(${map})` }}
          className="DetailsCard__map"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <select
            name="rating"
            ref={register({
              min: 1,
            })}
            defaultValue={0}
          >
            {_map(optionsConfig, (value, key) => (
              <option key={key + value} value={key}>
                {value}
              </option>
            ))}
          </select>
          {isUnderRated && <input name="comment" ref={register} />}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

DetailsCard.propTypes = { ride: PropTypes.object.isRequired };
