import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = ({ name, wide, color }) => (
  <button
    type="button"
    className={`${styles.button}
                  ${color ? null : styles.button_gray}
                  ${wide ? styles.button_double : null}`}
  >
    {name}
  </button>
);

Button.defaultProps = {
  name: null,
  color: false,
  wide: false,
};
Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
