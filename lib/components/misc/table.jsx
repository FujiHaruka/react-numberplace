import React from 'react'

const tableMatrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const renderTable = ({ wrapClass, rowClass, cellHandler }) =>
  <div className={wrapClass}>
    {
      tableMatrix.map(
        (nums, i) =>
          <div className={rowClass} key={i}>
            { nums.map(cellHandler) }
          </div>
      )
    }
  </div>

export default renderTable
