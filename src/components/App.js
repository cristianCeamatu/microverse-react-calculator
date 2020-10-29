/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

import styles from './styles.module.css';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: undefined,
      next: undefined,
      operation: undefined,
    };
  }

  handleClick = buttonName => {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
    console.log(this.state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className={styles.app}>
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel data={this.state} clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
