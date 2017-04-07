import React from 'react'
import styles from '../styles/controller.css'
import NumberButton from './controller/number_button'
import DeleteButton from './controller/delete_button'
import HintButton from './controller/hint_button'
import AnnoButton from './controller/anno_button'
import UndoButton from './controller/undo_button'
import { Range } from 'immutable'

const numbers = Range(1, 10).toJS()

class Controller extends React.Component {
  render () {
    return (
      <div className={styles.wrap}>
        <div className={styles.numbers}>
          {
            numbers.map(number =>
              <NumberButton number={number} key={number} />
            )
          }
        </div>
        <div>
          <UndoButton />
          <HintButton />
          <AnnoButton />
          <DeleteButton />
        </div>
      </div>
    )
  }
}

export default Controller
