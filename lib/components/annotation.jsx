import React from 'react'
import styles from '../styles/annotation.css'

const Annotation = ({ value }) =>
  <div className={styles.wrap}>
    { value }
  </div>

export default Annotation
