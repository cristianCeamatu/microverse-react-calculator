import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Display = ({ total, next }) => {
  let result = '0';
  if (next !== null) {
    result = next;
  } else if (total !== null) {
    result = total;
  }
  return (
    <div className={styles.display}>
      <p className="mb-0 text-right w-100">{result}</p>
    </div>
  );
};

Display.defaultProps = {
  total: '0',
  next: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
