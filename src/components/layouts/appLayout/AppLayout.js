import React from 'react';
import PropTypes from 'prop-types';
import './AppLayout.css';

export const AppLayout = ({ children }) => (
  <div className="AppLayout">{children}</div>
);

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
