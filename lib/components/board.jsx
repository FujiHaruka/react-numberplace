import React from 'react'
import Section from './board/section'
import Table from './misc/table'

class Board extends React.Component {
  render () {
    return (
      <Table
        wrapClass='rn-board-wrap'
        rowClass='rn-board-row'
        cellHandler={(sectionIdx, i) => <Section key={i} sectionIdx={sectionIdx} />}
      />
    )
  }
}

export default Board
