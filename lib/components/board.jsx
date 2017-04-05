import React from 'react'
import Section from './section'

const SECTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

class Board extends React.Component {
  render () {
    return (
      <div>
        {
          SECTIONS.map(sectionIdx =>
            <Section key={sectionIdx} sectionIdx={sectionIdx} />
          )
        }
      </div>
    )
  }
}

export default Board
