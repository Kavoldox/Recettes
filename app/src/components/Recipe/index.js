/*
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Presentation from 'src/components/Presentation';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';


/*
 * Code
 */
const Recipe = ({ recipe }) => (
  <div id="recipe">
    <Presentation
      name={recipe.name}
      imageUrl={recipe.imageURL}
    />
    <Ingredients ingredients={recipe.ingredients} />
    <Instructions instructions={recipe.steps} />
  </div>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default Recipe;
