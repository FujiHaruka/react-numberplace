import React from 'react'
import { getState, setState } from '../../state_exposer'
import { Mode } from '../../constants'
import Annotation from './annotation'
import c from 'classnames'
import styles from '../../styles/cell.css'
import Table from '../misc/table'
import _ from 'lodash'

const Cell = ({ sectionIdx, cellIdx }) => {
  let {
    cellState,
    annoState,
    fixedCell,
    focusedCell
    // mode
  } = getState()
  let id = {
    sectionIdx,
    cellIdx
  }
  let number = cellState.get(id)
  let fixed = fixedCell.isFixed(id)
  let annos = annoState.get(id)
  let isFocused = _.isEqual(focusedCell, id)
  let setFocusedCell = () => {
    setState({
      focusedCell: {
        cellIdx,
        sectionIdx
      }
    })
  }
  if (fixed) {
    return (
      <div className={c(styles.wrap, styles.fixed)}>
        { number }
      </div>
    )
  }

  return (
    <div
      className={c(styles.wrap, isFocused && styles.focused)}
      onClick={setFocusedCell}
      >
      {
        number > 0
        ? number
        : <Table
          wrapClass={styles.annoWrap}
          rowClass={styles.row}
          cellHandler={(i) =>
            <Annotation key={i} value={annos.has(i + 1) ? i + 1 : null} />
          }
          />
      }
    </div>
  )
}

export default Cell
