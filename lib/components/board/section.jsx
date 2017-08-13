import React from 'react'
import Cell from './cell'
import Table from '../misc/table'

const Section = ({ sectionIdx }) => (
  <Table
    wrapClass='rn-section-wrap'
    rowClass='rn-section-row'
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
