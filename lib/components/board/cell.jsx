import React from 'react'
import Annotation from './annotation'
import c from 'classnames'
import Table from '../misc/table'
import _ from 'lodash'
import {focusCellFactory} from '../../helpers/actionCreators'

const Cell = ({ sectionIdx, cellIdx, cellState, annoState, fixedCell, focusedCell, onUpdate }) => {
  let id = {
    sectionIdx,
    cellIdx
  }
  let number = cellState.get(id)
  let fixed = fixedCell.isFixed(id)
  let annos = annoState.get(id)
  if (fixed) {
    return (
      <div className={c('rn-cell-wrap', 'rn-cell-fixed')}>
        { number }
      </div>
    )
  }
  let isFocused = _.isEqual(focusedCell, id)
  let focusCell = focusCellFactory({
    cellIdx,
    sectionIdx,
    onUpdate
  })
  return (
    <div
      className={c('rn-cell-wrap', isFocused && 'rn-cell-focused')}
      onClick={focusCell}
      >
      {
        number > 0
        ? number
        : <Table
          wrapClass={'rn-cell-annoWrap'}
          rowClass={'rn-cell-row'}
          cellHandler={(i) =>
            <Annotation
              key={i}
              value={annos.has(i + 1) ? i + 1 : null}
            />
          }
          />
      }
    </div>
  )
}

export default Cell
