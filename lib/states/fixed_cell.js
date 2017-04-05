import { List } from 'immutable'
import { locationFrom } from '../helpers/location_accessor'

class FixedCell {
  constructor (gameData) {
    if (!gameData) {
      throw new Error('Invalid arg')
    }
    this._data = List(gameData.map(line => List(line.map(Boolean))))
  }

  isFixed (mayLocation) {
    let { top, left } = locationFrom(mayLocation)
    return this._data.get(top).get(left)
  }
}

export default FixedCell
