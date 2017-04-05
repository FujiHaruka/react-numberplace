import React from 'react'
import Cell from './cell'

const CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Section = ({ sectionIdx }) => (
  <div>
    {
      CELLS.map(cellIdx =>
        <Cell
          key={cellIdx}
          cellIdx={cellIdx}
          sectionIdx={sectionIdx}
        />
      )
    }
  </div>
)

export default Section
