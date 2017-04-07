import React from 'react'
import Section from './section'
import styles from '../styles/board.css'

class Board extends React.Component {
  render () {
    return (
      <div className={styles.wrap}>
        <div className={styles.body}>
          <div className={styles.row}>
            {
              [0, 1, 2].map(sectionIdx =>
                <Section key={sectionIdx} {...{ sectionIdx }} />
              )
            }
          </div>
          <div className={styles.row}>
            {
              [3, 4, 5].map(sectionIdx =>
                <Section key={sectionIdx} {...{ sectionIdx }} />
              )
            }
          </div>
          <div className={styles.row}>
            {
              [6, 7, 8].map(sectionIdx =>
                <Section key={sectionIdx} {...{ sectionIdx }} />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Board
