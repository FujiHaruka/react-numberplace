import React from 'react'
import { getState } from '../state_exposer'
import { Mode } from '../constants'
import Annotation from './annotation'
import styles from '../styles/cell.css'
import { Range } from 'immutable'

const annoArr = annos => annos.toJS().reduce((arr, value) => {
  arr[value - 1] = value
  return arr
}, Range(0, 9).toJS())

const renderAnnos = annos => {
  let arr = annoArr(annos)
  return (
    <div className={styles.annoWrap}>
      <div className={styles.row}>
        {arr.slice(0, 3).map(value =>
          <Annotation value={value} />
        )}
      </div>
      <div className={styles.row}>
        {arr.slice(3, 6).map(value =>
          <Annotation value={value} />
        )}
      </div>
      <div className={styles.row}>
        {arr.slice(6, 9).map(value =>
          <Annotation value={value} />
        )}
      </div>
    </div>
  )
}

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
        : renderAnnos(annos)
      }
    </div>
  )
}

export default Cell
