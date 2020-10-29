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
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    console.log(buttonName);
    this.setState(
      (prevState, props) => {
        console.log(prevState);
        return calculate(prevState, buttonName);
      },
      () => console.log(this.state),
    );
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className={styles.app}>
        <Display total={total} next={next} />
        <ButtonPanel data={this.state} clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
