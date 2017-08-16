import React from 'react'
import c from 'classnames'
import {clearCellFactory} from '../../helpers/actionCreators'

const DeleteButton = ({focusedCell, cellState, annoState, history, onUpdate}) =>
  <div
    className={c('rn-buttons-action', 'rn-buttons-nomalColor')}
    onClick={clearCellFactory({
      cell: focusedCell,
      cellState,
      annoState,
      history,
      onUpdate
    })}
    >
    Delete
  </div>

export default DeleteButton
