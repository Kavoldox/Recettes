/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

/*
 * Local import
 */
import Ingredient from './Ingredient';

/*
 * Code
 */
const Ingredients = ({ ingredients, showContent }) => (
  <div id="ingredient">
    <div id="ingredient-menu" >
      <h4 id="ingredient-title">Ingrédients</h4>
      <FaAngleDown className="title-icon icon-ingredients" onClick={showContent('ingredients')}/>
    </div>
    <div id="ingredients">
      {ingredients.map(ingredient => (
        <Ingredient
          key={ingredient.name}
          {...ingredient}
        />
      ))}
  </div>
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
