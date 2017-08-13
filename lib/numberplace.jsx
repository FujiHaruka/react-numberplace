import React from 'react'
import Board from './components/board'
import Controller from './components/controller'
import { exposeSetState, cancelState } from './state_exposer'
import autoBind from 'react-autobind'
import c from 'classnames'
import { Mode } from './constants'
import { CellState, AnnoState, FixedCell, History } from './states'
import './styles/numberplace.css'
import './styles/annotation.css'
import './styles/board.css'
import './styles/buttons.css'
import './styles/controller.css'
import './styles/cell.css'
import './styles/section.css'

class Numberplace extends React.Component {
  constructor (props) {
    super(props)
    let {
      gameData
    } = props
    if (!gameData || !gameData.every(arr => arr.every(n => typeof n === 'number'))) {
      throw new Error('props "gameData" is required in Numberplace.')
    }
    autoBind(this)
    exposeSetState(this)
    this.state = Numberplace.getInitialState(props)
  }

  componentWillReceiveProps (nextProps) {
    this.setState(Numberplace.getInitialState(nextProps))
  }

  componentDidUpdate (prevProps, prevState) {
    let { cellState } = this.state
    if (prevState.cellState === cellState) {
      return
    }
    let isFinished = cellState.isFinished()
    if (isFinished) {
      this.props.onFinished()
    }
  }

  componentWillUnmount () {
    cancelState()
  }

  render () {
    let {
      className
    } = this.props
    return (
      <div className={c('rn-numberplace-wrap', className)}>
        <Board />
        <Controller />
      </div>
    )
  }
}

Numberplace.getInitialState = ({ gameData }) => ({
  gameData,
  focusedCell: {},
  focusedNumber: 0,
  mode: Mode.ANSWER,
  history: new History(),
  cellState: new CellState(gameData),
  annoState: new AnnoState(),
  fixedCell: new FixedCell(gameData)
})

export default Numberplace
