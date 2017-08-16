import React from 'react'
import c from 'classnames'
import {putAnswerFactory, addAnnoFactory} from '../../helpers/actionCreators'
import {Mode} from '../../constants'

const NumberButton = ({ number, mode, onUpdate, focusedCell, cellState, annoState, history }) =>
  <div
    className={c(
      'rn-buttons-number',
      mode === Mode.ANSWER ? 'rn-buttons-nomalColor' : 'rn-buttons-annoColor'
    )}
    onClick={
      mode === Mode.ANSWER
      ? putAnswerFactory({
        value: number,
        cell: focusedCell,
        cellState,
        history,
        onUpdate
      })
      : addAnnoFactory({
        value: number,
        cell: focusedCell,
        annoState,
        history,
        onUpdate
      })
    }
    >
    { number }
  </div>

export default NumberButton
