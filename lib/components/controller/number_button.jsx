import React from 'react'
import styles from '../../styles/buttons.css'

const NumberButton = ({ number }) =>
  <div className={styles.numberButton}>
    { number }
  </div>

export default NumberButton
