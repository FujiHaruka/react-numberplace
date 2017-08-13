import React from 'react'
import c from 'classnames'
import Actions from '../../helpers/actions.js'

const UndoButton = () =>
  <div
    className={c('rn-buttons-action', 'rn-buttons-nomalColor')}
    onClick={Actions.undo}
    >
    Undo
  </div>

export default UndoButton
