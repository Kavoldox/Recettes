/*
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

/*
 * Local import
 */
import Presentation from 'src/components/Presentation';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';


/*
 * Code
 */

class Recipe extends React.Component {

  state= {
    ingredients: false,

    instructions: false,
  }

  componentWillMount() {
    this.setState({
      ingredients: false,

      instructions: false,
    })
  }

  showContent = id => () => {
    // const id = `#{id}`;

    this.setState({
      [id]: !this.state[id],
    });

    if (this.state[id]) {
      return (
        anime({
          targets: `#${id}`,
          translateY: '50em',
          height: '100%',
          duration: 500,
          easing: 'easeInOutQuart',
        }),
        anime({
          targets: `.icon-${id}`,
          rotate: '180',
          duration: 500,
          easing: 'easeInOutQuart',
        })
      );
    }
    return (
      anime({
        targets: `#${id}`,
        translateY: '-50em',
        duration: 500,
        height: 0,
        easing: 'easeInOutQuart',
      }),
      anime({
        targets: `.icon-${id}`,
        rotate: '0',
        duration: 500,
        easing: 'easeInOutQuart',
      })
    );
  }

  render() {
    const { recipe } = this.props;
    return (
      <div id="recipe">
        <Presentation
          name={recipe.name}
          imageUrl={recipe.imageURL}
        />
        <div id="recipe-info">
          <Ingredients showContent={this.showContent} ingredients={recipe.ingredients} />
          <Instructions showContent={this.showContent} instructions={recipe.steps} />
        </div>
      </div>
    )
  }
 }

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default Recipe;
