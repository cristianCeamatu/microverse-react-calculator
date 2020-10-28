import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = ({ name, differentColor }) => {
  console.log(differentColor);
  return (
    <button
      type="button"
      className={`${styles.button}
                  ${differentColor ? styles.button_orange : null}
                  ${name === '0' ? styles.button_double : null}`}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: null,
  differentColor: false,
};
Button.propTypes = {
  name: PropTypes.string,
  differentColor: PropTypes.bool,
};

export default Button;
