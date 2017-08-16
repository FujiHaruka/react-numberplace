import React from 'react'
import c from 'classnames'
import {undoFactory} from '../../helpers/actionCreators'

const UndoButton = ({cellState, annoState, history, onUpdate}) =>
  <div
    className={c('rn-buttons-action', 'rn-buttons-nomalColor')}
    onClick={undoFactory({cellState, annoState, history, onUpdate})}
    >
    Undo
  </div>

export default UndoButton
