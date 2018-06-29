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
const Presentation = ({
  name,
  imageUrl,
}) => (
  <div id="presentation">
    <img src={imageUrl} alt={name} id="presentation-image" />
    <div id="presentation-content">
      <h1 id="presentation-title">{name}</h1>
    </div>
  </div>
);

Presentation.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Presentation;
