import React from 'react';

import Button from './Button';
import styles from './styles.module.css';

const ButtonPanel = () => {
  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const differentColors = ['+', 'X', '-', '=', '÷'];
  return (
    <div className={styles.button_panel}>
      {buttons.map((row, i) => (
        <div className={styles.button_panel_row} key={`row${buttons[i][0]}`}>
          {row.map((name) => (
            <Button name={name} differentColor={differentColors.includes(name)} key={name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
