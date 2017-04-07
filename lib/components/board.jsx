import React from 'react'
import Section from './section'
import styles from '../styles/board.css'
import Table from './misc/table'

class Board extends React.Component {
  render () {
    return (
      <div className={styles.wrap}>
        <Table
          wrapClass={styles.body}
          rowClass={styles.row}
          cellHandler={(sectionIdx, i) => <Section key={i} sectionIdx={sectionIdx} />}
        />
      </div>
    )
  }
}

export default Board
