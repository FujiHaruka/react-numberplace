import React from 'react'
import { getState, setState } from '../../state_exposer'
import Annotation from './annotation'
import c from 'classnames'
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
      <div className={c('rn-cell-wrap', 'rn-cell-fixed')}>
        { number }
      </div>
    )
  }

  return (
    <div
      className={c('rn-cell-wrap', isFocused && 'rn-cell-focused')}
      onClick={setFocusedCell}
      >
      {
        number > 0
        ? number
        : <Table
          wrapClass={'rn-cell-annoWrap'}
          rowClass={'rn-cell-row'}
          cellHandler={(i) =>
            <Annotation key={i} value={annos.has(i + 1) ? i + 1 : null} />
          }
          />
      }
    </div>
  )
}

export default Cell
