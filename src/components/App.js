import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

import styles from './styles.module.css';

const App = () => (
  <div className={styles.app}>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
