/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Ingredient from './Ingredient';

/*
 * Code
 */
const Ingredients = ({ ingredients }) => (
  <div id="ingredients">
    {ingredients.map(ingredient => (
      <Ingredient
        key={ingredient.name}
        {...ingredient}
      />
    ))}
  </div>
);
Ingredients.propTypes = {
  // ingredients: PropTypes.array.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/*
 * Export default
 */
export default Ingredients;
