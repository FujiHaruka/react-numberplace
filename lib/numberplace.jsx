import React from 'react'
import Board from './components/board'
import Controller from './components/controller'
import c from 'classnames'
import PropTypes from 'prop-types'
import { CellState, AnnoState, FixedCell, History } from './states'
import './styles/numberplace.css'
import './styles/annotation.css'
import './styles/board.css'
import './styles/buttons.css'
import './styles/controller.css'
import './styles/cell.css'
import './styles/section.css'

class NumberPlace extends React.PureComponent {
  componentDidUpdate (prevProps) {
    const s = this
    const cellState = CellState.fromList(s.props.cellState)
    if (prevProps.cellState === cellState.state) {
      return
    }
    let isFinished = cellState.isFinished()
    if (isFinished) {
      s.props.onFinished()
    }
  }

  render () {
    const s = this
    const {
      className,
      focusedCell,
      mode,
      onUpdate
    } = s.props
    const cellState = CellState.fromList(s.props.cellState)
    const annoState = AnnoState.fromList(s.props.annoState)
    const history = History.fromList(s.props.history)
    const fixedCell = FixedCell.fromList(s.props.fixedCell)
    const state = {
      focusedCell,
      mode,
      onUpdate,
      cellState,
      annoState,
      history,
      fixedCell
    }
    return (
      <div className={c('rn-numberplace-wrap', className)}>
        <Board {...state} />
        <Controller {...state} />
      </div>
    )
  }
}

NumberPlace.propTypes = {
  focusedCell: PropTypes.object,
  mode: PropTypes.number,
  history: PropTypes.object,
  cellState: PropTypes.object,
  annoState: PropTypes.object,
  fixedCell: PropTypes.object,
  onUpdate: PropTypes.func,
  onFinished: PropTypes.func,
  className: PropTypes.string
}

export default NumberPlace
