/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/**
 * Local import
 */
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import { recipeSlug } from 'src/utils/url';

/**
 * Code
 */
const App = ({ loaded, data: recipesData }) => {
  if (!loaded) {
    return <div>Loading…</div>;
  }
  return (
    <div id="app">
      <div id="app-nav">
        <Nav recipes={recipesData} />
      </div>
      <div id="app-main">
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/recipe/:slug"
          render={
            ({ match }) => {
              const { slug } = match.params;
              const recipe = recipesData.find(r => recipeSlug(r.name) === slug);
              return <Recipe recipe={recipe} />;
            }
          }
        />
      </div>
    </div>
  );
};
App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * Export
 */
export default App;
