import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div id="display">
    <div className="row">
      <p className="mb-0 text-right col shadow bg-light py-2 h3">{result}</p>
    </div>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
