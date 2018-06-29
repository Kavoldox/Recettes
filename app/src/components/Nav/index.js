/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import { recipeUrl } from 'src/utils/url';
import Link from 'src/components/Link';

/**
 * Code
 */
const Nav = ({ recipes }) => (
  <nav className="nav">
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      {
        recipes.map(recipe => (
          <li
            key={recipe.name}
            className="nav-item"
          >
            <Link to={recipeUrl(recipe.name)}>{recipe.name}</Link>
          </li>
        ))
      }
    </ul>
  </nav>
);
Nav.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * Export
 */
export default Nav;
