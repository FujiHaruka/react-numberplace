import React from 'react'
import c from 'classnames'
import styles from '../../styles/buttons.css'
import { getState, setState } from '../../state_exposer'
import { Mode } from '../../constants'
import _ from 'lodash'

const updateAnswer = (number) => () => {
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
}

const updateAnno = (number) => () => {
  let {
    annoState,
    focusedCell
  } = getState()
  if (_.isEmpty(focusedCell)) {
    return
  }
  setState({
    annoState: annoState.add({
      value: number,
      ...focusedCell
    })
  })
}

const NumberButton = ({ number, mode }) =>
  <div
    className={c(
      styles.number,
      mode === Mode.ANSWER ? styles.nomalColor : styles.annoColor
    )}
    onClick={
      mode === Mode.ANSWER
      ? updateAnswer(number)
      : updateAnno(number)
    }
    >
    { number }
  </div>

export default NumberButton
