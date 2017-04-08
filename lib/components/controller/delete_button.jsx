import React from 'react'
import c from 'classnames'
import styles from '../../styles/buttons.css'
import { getState } from '../../state_exposer'
import _ from 'lodash'
import Actions from '../../helpers/actions'

const DeleteButton = () =>
  <div
    className={c(styles.action, styles.nomalColor)}
    onClick={() => {
      let {
        focusedCell
      } = getState()
      if (_.isEmpty(focusedCell)) {
        return
      }
      Actions.clearCell(focusedCell)
    }}
    >
    Delete
  </div>

export default DeleteButton
