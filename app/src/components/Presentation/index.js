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
    <div id="presentation-content">
      <h2 id="presentation-title">{name}</h2>
      {/* <img src={imageUrl} alt={name} id="presentation-image" /> */}
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
