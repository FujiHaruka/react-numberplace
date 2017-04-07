import React from 'react'
import c from 'classnames'
import styles from '../../styles/buttons.css'
import { getState, setState } from '../../state_exposer'
import _ from 'lodash'

const DeleteButton = () =>
  <div
    className={c(styles.action, styles.nomalColor)}
    onClick={() => {
      let {
        cellState,
        annoState,
        focusedCell
      } = getState()
      if (_.isEmpty(focusedCell)) {
        return
      }
      setState({
        cellState: cellState.update({
          value: 0,
          ...focusedCell
        }),
        annoState: annoState.clear({
          ...focusedCell
        })
      })
    }}
    >
    Delete
  </div>

export default DeleteButton
