/*
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */

/*
 * Code
 */
const Instructions = ({ instructions }) => (
  <ol id="instructions">
    {instructions.map(instruction => (
      <li key={instruction} className="instruction">
        {instruction}
      </li>
    ))}
  </ol>
);

Instructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/*
 * Export
 */
export default Instructions;
