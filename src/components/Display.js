import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Display = ({ result }) => (
  <div className={styles.display}>
    <p className="mb-0 text-right w-100">{result}</p>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
