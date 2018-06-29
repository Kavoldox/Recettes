/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */

/*
 * Code
 */
const Ingredient = ({ quantity, name }) => (
  <div className="ingredient">
    <div className="ingredient-quantity">{quantity}</div>
    <div className="ingredient-name">{name}</div>
  </div>
);
Ingredient.propTypes = {
  quantity: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default Ingredient;
