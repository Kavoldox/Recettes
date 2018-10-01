/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/**
 * Local import
 */
import Carousel from 'src/components/Carousel';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import { recipeSlug } from 'src/utils/url';
import Link from 'src/components/Link';

/**
 * Code
 */
const App = ({ backimage, loaded, data: recipesData }) => {
  if (!loaded) {
    return <div>Loading…</div>;
  }
  return (
    <div
      id="app"
      style={{
        background: `top/80% url(${backimage})`,
      }}
    >
      <div id="scrollbar"/>
      <div id="app-main">
        <Link to="/">
          <h1 id="app-main-title">Recipes</h1>
        </Link>
        <div id="app-main-pres">
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
        <div id="app-main-carousel">
          <Carousel recipes={recipesData} />
        </div>
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
