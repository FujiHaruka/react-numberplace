import React from 'react'
import c from 'classnames'
import styles from '../../styles/buttons.css'
import { getState, setState } from '../../state_exposer'
import { Mode } from '../../constants'
import _ from 'lodash'

const NumberButton = ({ number, mode }) =>
  <div
    className={c(
      styles.number,
      mode === Mode.ANNOTATION ? styles.annoColor : styles.nomalColor
    )}
    onClick={() => {
      let {
        cellState,
        focusedCell
      } = getState()
      if (_.isEmpty(focusedCell)) {
        return
      }
      setState({
        cellState: cellState.update({
          value: number,
          ...focusedCell
        })
      })
    }}
    >
    { number }
  </div>

export default NumberButton
