import React from 'react'
import c from 'classnames'
import styles from '../../styles/buttons.css'
import Actions from '../../helpers/actions.js'

const UndoButton = () =>
  <div
    className={c(styles.action, styles.nomalColor)}
    onClick={Actions.undo}
    >
    Undo
  </div>

export default UndoButton
