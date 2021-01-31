import { map as _map } from "lodash-es";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postComment, selectRideDetails } from "../../models";
import { currencyFormater, dateFormater } from "../../utils";
import "./DetailsCard.css";

export const DetailsCard = ({
  ride: { created_at, dropoff, map, total, pickup },
}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();
  const { status } = useSelector(selectRideDetails);

  const isAppLoading = status === "loading";
  const selectValue = watch("rating");
  const hasSelectedValue = selectValue > 0;
  const isUnderRated = hasSelectedValue && selectValue <= 2;

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
        <div className="DetailsCard__destinations">
          <div>From: {pickup}</div>
          <div>To: {dropoff}</div>
        </div>
        <div className="DetailsCard__fare">
          <strong>{`Total fare: ${currencyFormater(total)}`}</strong>
        </div>
        <div
          style={{ backgroundImage: `url(${map})` }}
          className="DetailsCard__map"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="DetailsCard__form">
          {hasSelectedValue && (
            <div className="DetailsCard__rate-text">Rate your driver!</div>
          )}
          <select
            className="DetailsCard__select"
            name="rating"
            ref={register({
              min: 1,
              required: true,
            })}
            defaultValue={0}
          >
            {_map(optionsConfig, (value, key) => (
              <option key={key + value} value={key}>
                {value}
              </option>
            ))}
          </select>
          {isUnderRated && (
            <input
              className="DetailsCard__extra-input"
              placeholder="Optional comment"
              name="comment"
              ref={register}
            />
          )}
          <input
            className="DetailsCard__submit"
            type="submit"
            disabled={!hasSelectedValue || isAppLoading}
          />
        </form>
      </div>
    </div>
  );
};

DetailsCard.propTypes = { ride: PropTypes.object.isRequired };
