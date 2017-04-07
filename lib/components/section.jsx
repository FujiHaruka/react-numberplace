import React from 'react'
import Cell from './cell'
import styles from '../styles/section.css'
import Table from './misc/table'

const Section = ({ sectionIdx }) => (
  <Table
    wrapClass={styles.wrap}
    rowClass={styles.row}
    cellHandler={(cellIdx, i) =>
      <Cell
        key={i}
        cellIdx={cellIdx}
        sectionIdx={sectionIdx}
      />
    }
  />
)

export default Section
