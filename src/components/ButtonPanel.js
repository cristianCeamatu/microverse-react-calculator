import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import styles from './styles.module.css';

const ButtonPanel = ({ clickHandler }) => {
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
          {row.map(name => {
            const wide = name === '0' ? true : undefined;
            const color = differentColors.includes(name) ? true : undefined;
            return (
              <Button
                name={name}
                wide={wide}
                color={color}
                clickHandler={buttonName => clickHandler(buttonName)}
                key={name}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
