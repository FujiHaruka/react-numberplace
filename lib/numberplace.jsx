import React from 'react'
import Board from './components/board'
import Controller from './components/controller'
import { exposeSetState, cancelState } from './state_exposer'
import autoBind from 'react-autobind'
import { Mode } from './constants'
import { CellState, AnnoState, FixedCell } from './states'

class Numberplace extends React.Component {
  constructor (props) {
    super(props)
    let {
      gameData
    } = props
    if (!gameData || gameData.every(arr => arr.every(n => typeof n === 'number'))) {
      throw new Error('props "gameData" is required in Numberplace.')
    }
    autoBind(this)
    this.state = Numberplace.getInitialState(props)
  }

  componentWillReceiveProps (nextProps) {
    this.setState(Numberplace.getInitialState(nextProps))
  }

  componentWillUnmount () {
    cancelState()
  }

  componentDidMount () {
    exposeSetState(this)
  }

  render () {
    return (
      <div>
        <Board />
        <Controller />
      </div>
    )
  }
}

Numberplace.getInitialState = ({ gameData }) => ({
  gameData,
  focusedCell: false,
  mode: Mode.ANSWER,
  cellNumers: new CellState(gameData),
  annoNumbers: new AnnoState(),
  fixedCell: new FixedCell(gameData)
})

export default Numberplace
