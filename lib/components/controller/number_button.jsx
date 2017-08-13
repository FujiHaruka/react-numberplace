import React from 'react'
import c from 'classnames'
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
      'rn-buttons-number',
      mode === Mode.ANSWER ? 'rn-buttons-nomalColor' : 'rn-buttons-annoColor'
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
