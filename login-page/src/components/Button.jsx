import React from 'react'
import styles from './button.module.css'

const Button = ({ value, onButtonClick }) => {
    console.log(value)
    return (
        <div>
            <button className={styles.button} onClick={(event) => onButtonClick(event, value)}>{value}</button>
        </div>
    )
}

export default Button
