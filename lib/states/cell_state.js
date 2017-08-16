import { List, Range, Set } from 'immutable'
import { locationFrom } from '../helpers/location_accessor'

const isNumber = value => typeof value === 'number'

class CellState {
  constructor (arg) {
    const isState = List.isList(arg)
    if (isState) {
      const state = arg
      this._state = state
    } else {
      const gameData = arg
      this._state = List(gameData.map(line => List(line)))
    }
  }

  static fromState (state) {
    return new CellState(state)
  }

  get state () {
    return this._state
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

  isFilled () {
    return this._state.every((line) =>
      line.every(value => value > 0)
    )
  }

  isFinished () {
    if (!this.isFilled()) {
      return false
    }
    let state = this._state
    let okRow = state.every(
      row => Set(row).size === 9
    )
    if (!okRow) {
      return false
    }
    let okCol = Range(0, 9).every(i => {
      let colSet = state.reduce((col, row) => col.add(row.get(i)), Set())
      return colSet.size === 9
    })
    if (!okCol) {
      return false
    }
    let okSection = Range(0, 9).every(sectionIdx => {
      let sectionSet = Range(0, 9).reduce(
        (section, cellIdx) => section.add(this.get({ sectionIdx, cellIdx })),
        Set()
      )
      return sectionSet.size === 9
    })
    if (!okSection) {
      return false
    }
    return true
  }
}

export default CellState
