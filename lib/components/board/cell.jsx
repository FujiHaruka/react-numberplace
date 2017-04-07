import React from 'react'
import { getState } from '../../state_exposer'
import { Mode } from '../../constants'
import Annotation from './annotation'
import styles from '../../styles/cell.css'
import Table from '../misc/table'

const Cell = ({ sectionIdx, cellIdx }) => {
  let {
    cellState,
    annoState,
    fixedCell
    // mode
  } = getState()
  let number = cellState.get({ sectionIdx, cellIdx })
  let fixed = fixedCell.isFixed({ sectionIdx, cellIdx })
  let annos = annoState.get({ sectionIdx, cellIdx })
  return (
    <div className={styles.wrap}>
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
