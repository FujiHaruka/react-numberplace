import React from 'react'
import { getState } from '../state_exposer'
import { Mode } from '../constants'

const Cell = ({ sectionIdx, cellIdx }) => {
  let {
    cellState,
    fixedCell,
    mode
  } = getState()
  let number = cellState.get({ sectionIdx, cellIdx })
  let fixed = fixedCell.isFixed({ sectionIdx, cellIdx })
  switch (mode) {
    case Mode.ANSWER:
      return <div>{ number > 0 ? number : '' }</div>
    case Mode.ANNOTATION:
      return <div>ano</div>
  }
  throw new Error('Invalid mode')
}

export default Cell
