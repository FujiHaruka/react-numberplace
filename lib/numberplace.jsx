import React from 'react'
import Board from './components/board'
import Controller from './components/controller'
import { exposeSetState, cancelState } from './state_exposer'
import autoBind from 'react-autobind'
import { Mode } from './constants'

class Numberplace extends React.Component {
  constructor (props) {
    super(props)
    let {
      gameData
    } = props
    if (!gameData) {
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

Numberplace.getInitialState = (props = {}) => ({
  ...props,
  focusedCell: false,
  mode: Mode.ANSWER,
  cellNumers: [],
  annoNumbers: []
})

export default Numberplace
