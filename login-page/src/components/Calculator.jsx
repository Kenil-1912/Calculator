import React, { useState } from 'react'
import styles from "./calculator.module.css"
import Screen from './Screen'
import ButtonContainer from './ButtonContainer'

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handelButtonClick = (event, value) => {
    if (value === 'C') {
      setDisplay('');
    }
    else if (value === '=') {
      const result = eval(display)
      setDisplay(result)
    }
    else {
      const new_display_value = display + value;
      setDisplay(new_display_value)
    }
  }

  return (
    <div className={`${styles.calculator}`}>
      <Screen value={display} />
      <ButtonContainer onButtonClick={handelButtonClick} />
    </div>
  )
}

export default Calculator
