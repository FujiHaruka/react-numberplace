import { List } from 'immutable'
import { locationFrom } from '../helpers/location_accessor'

class FixedCell {
  constructor (gameData) {
    if (!gameData) {
      throw new Error('Invalid arg')
    }
    const isState = List.isList(gameData)
    this._data = isState ? gameData : List(gameData.map(line => List(line.map(Boolean))))
  }

  static fromState (state) {
    return new FixedCell(state)
  }

  get state () {
    return this._data
  }

  isFixed (mayLocation) {
    let { top, left } = locationFrom(mayLocation)
    return this._data.get(top).get(left)
  }
}

export default FixedCell
