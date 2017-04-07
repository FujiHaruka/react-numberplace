import React from 'react'
import Section from './board/section'
import styles from '../styles/board.css'
import Table from './misc/table'

class Board extends React.Component {
  render () {
    return (
      <Table
        wrapClass={styles.wrap}
        rowClass={styles.row}
        cellHandler={(sectionIdx, i) => <Section key={i} sectionIdx={sectionIdx} />}
      />
    )
  }
}

export default Board
