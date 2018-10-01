/*
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

/*
 * Local import
 */

/*
 * Code
 */
const Instructions = ({ instructions, showContent }) => (
  <div id="instruction">
    <div id="instruction-menu">
      <h4 id="instruction-title">Instructions</h4>
      <FaAngleDown className="title-icon icon-instructions" onClick={showContent('instructions')}/>
    </div>
    <ol id="instructions" >
      {instructions.map(instruction => (
        <li key={instruction} className="instruction">
          {instruction}
        </li>
      ))}
    </ol>
  </div>
);

Instructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/*
 * Export
 */
export default Instructions;
