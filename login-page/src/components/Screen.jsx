import React from 'react'
import styles from './screen.module.css'
const Screen = ({ value }) => {
    return (
        <div>
            <input type="text" id='display' value={value} readOnly className={styles.display} />
        </div>
    )
}

export default Screen
