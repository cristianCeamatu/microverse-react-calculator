/* eslint-disable no-unused-vars */
import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

import styles from './styles.module.css';
import calculate from '../logic/calculate';

const App = () => (
  <div className={styles.app}>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
