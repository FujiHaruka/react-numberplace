import React from 'react'
import Cell from './cell'
import styles from '../styles/section.css'

const Section = ({ sectionIdx }) => (
  <div className={styles.wrap}>
    <div className={styles.row}>
      {
        [0, 1, 2].map(cellIdx =>
          <Cell
            {...{
              cellIdx,
              sectionIdx,
              key: cellIdx
            }}
          />
        )
      }
    </div>
    <div className={styles.row}>
      {
        [3, 4, 5].map(cellIdx =>
          <Cell
            {...{
              cellIdx,
              sectionIdx,
              key: cellIdx
            }}
          />
        )
      }
    </div>
    <div className={styles.row}>
      {
        [6, 7, 8].map(cellIdx =>
          <Cell
            {...{
              cellIdx,
              sectionIdx,
              key: cellIdx
            }}
          />
        )
      }
    </div>
  </div>
)

export default Section
