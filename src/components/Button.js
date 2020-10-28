import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button" id={name} className="btn btn-info">
    {name}
  </button>
);

Button.defaultProps = {
  name: null,
};
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
