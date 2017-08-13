import React from 'react'
import NumberButton from './controller/number_button'
import DeleteButton from './controller/delete_button'
import AnnoButton from './controller/anno_button'
import UndoButton from './controller/undo_button'
import { Range } from 'immutable'
import { getState } from '../state_exposer'

const numbers = Range(1, 10).toJS()

class Controller extends React.Component {
  render () {
    let {
      mode
    } = getState()
    return (
      <div className={'rn-controller-wrap'}>
        <div className={'rn-controller-buttons'}>
          {
            numbers.map(number =>
              <NumberButton number={number} key={number} mode={mode} />
            )
          }
        </div>
        <div className={'rn-controller-actionButtons'}>
          <UndoButton />
          <DeleteButton />
          <AnnoButton mode={mode} />
        </div>
      </div>
    )
  }
}

export default Controller
