import React from 'react';
import Slide from 'src/containers/Slide';
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

const lastiem = (array, n) => {
  if (n == null) {
    return array[array.length - 1];
  }
  return array.slice(Math.max(array.length - n, 0));
};

class Carousel extends React.Component {

  state = {
    activeIndex: 0,
    translateValue: 0,
    recipes: this.props.recipes,
  }

goToNextSlide = (e) => {
  e.preventDefault();


  const slidesLength = this.state.recipes.length;
  let [first, ...rest] = this.state.recipes;
  let slides = [...rest, first];

  this.setState({
    recipes: slides,
  });
}


goToPrevSlide = (e) => {
  e.preventDefault();

  let last = lastiem(this.state.recipes);
  let [...rest] = this.state.recipes.slice(0, -1);
  // slides.push(slides.shift());
  const slides = [last, ...rest]

  this.setState({
    recipes: slides,
  });
}

// handleMouse = (e) => {
//   e.preventDefault();
//   const indexVal = Number(e.target.index)
//   console.log(e.target.name)
//   this.setState({ activeIndex: indexVal })
// }

 slideWidth = () => document.querySelector('.slide').clientWidth

render() {
   const { width } = this.state;
   const isMobile = width <= 500;
   // const filter = this.state.recipes.filter((data, index) => i.indexOf(index) < 3);

   // console.log(filter)
   return (
      <div className="carousel">
        <div
          className="carousel-buttons"
          onClick={this.goToPrevSlide}
        >
          <FaAngleUp className="carousel-buttons-icon" />
        </div>
        <div className="carousel-slides" >
          <div
            className="carousel-slides-slides"
            // style={{
            //   transform: `translateX(${this.state.translateValue}px)`,
            //   transition: 'transform ease-out 0.7s'
            // }}
            >
            {this.state.recipes.slice(0,3).map((data, index) => (
              <Slide
                key={data.name}
                index={index}
                activeIndex={this.state.activeIndex}
                handleMouse={this.handleMouse}
                {...data}
              />
            ))}
          </div>
        </div>
        <div className="carousel-buttons" onClick={this.goToNextSlide}>
          <FaAngleDown className="carousel-buttons-icon"/>
        </div>
      </div>
  );
}
}

export default Carousel;
