import React from 'react'
import styles from './buttoncontainer.module.css'
import Button from './Button';
const ButtonContainer = ({ onButtonClick }) => {
    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.buttonoContainer}>
            {
                buttons.map((button) => {
                    console.log(button);
                    return <Button key={button} value={button} onButtonClick={onButtonClick} />
                })
            }
        </div>
    )
}

export default ButtonContainer
