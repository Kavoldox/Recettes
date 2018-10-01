import React from 'react'
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { recipeUrl } from 'src/utils/url';
import Link from 'src/components/Link';


class Slide extends React.Component {
  state = {
    width: window.innerWidth,
  }


  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { handleMouse, index, activeIndex, imageURL, name, handleImage } = this.props;
    const { width } = this.state;
    const isMobile = width <= 500;
    const classSlide = (index === activeIndex) ? 'slide slide-active' : 'slide';
    return (

      // setTimeout(() => "carousel-active", 1000)
      // : setTimeout(() => "carousel", 1000)

      <div
        className={classSlide}
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        index={index}
        onMouseOver={handleMouse}
         >
        <h3 className="slide-name">{name}</h3>
        {index === activeIndex ?
          <Link to={recipeUrl(name)}>
            <div className="slide-link" onClick={handleImage(imageURL)} >
              Voir
            </div>
          </Link>
        :
          null
        }
        {/* <div
          className="slide-image"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
      </div>
    )
  }
}


export default Slide;
