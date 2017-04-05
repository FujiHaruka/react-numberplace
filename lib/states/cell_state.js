import { List } from 'immutable'
import { locationFrom } from '../helpers/location_accessor'

const isNumber = value => typeof value === 'number'

class CellState {
  constructor (gameData) {
    this._state = List(gameData.map(line => List(line)))
  }

  get (mayLocation) {
    let { top, left } = locationFrom(mayLocation)
    return this._state.get(top).get(left)
  }

  update ({ value, ...mayLocation }) {
    if (!isNumber(value)) {
      throw new Error('Invalid arg')
    }
    let { top, left } = locationFrom(mayLocation)
    let gameData = this._state.setIn([top, left], value)
    return new CellState(gameData)
  }

  toJS () {
    return this._state.toJS()
  }
}

export default CellState
