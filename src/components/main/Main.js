import React from "react";
import PropTypes from "prop-types";
import "./Main.css";

export const Main = ({ children }) => <div className="Main">{children}</div>;

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
