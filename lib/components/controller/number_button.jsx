import React from 'react'
import c from 'classnames'
import styles from '../../styles/buttons.css'
import { getState } from '../../state_exposer'
import Actions from '../../helpers/actions'
import { Mode } from '../../constants'
import _ from 'lodash'

const updateAnswer = (value) => () => {
  let {
    focusedCell
  } = getState()
  if (_.isEmpty(focusedCell)) {
    return
  }
  Actions.putAnswer({ value, ...focusedCell })
}

const updateAnno = (value) => () => {
  let {
    focusedCell
  } = getState()
  if (_.isEmpty(focusedCell)) {
    return
  }
  Actions.addAnno({ value, ...focusedCell })
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
