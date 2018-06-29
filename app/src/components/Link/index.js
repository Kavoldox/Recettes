/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */

/**
 * Code
 */
const Link = ({ to, children }) => (
  <NavLink
    exact
    className="nav-link"
    activeClassName="nav-link--active"
    to={to}
  >
    {children}
  </NavLink>
);
Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/**
 * Export
 */
export default Link;
