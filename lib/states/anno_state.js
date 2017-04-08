import { List, Repeat, Set } from 'immutable'
import { locationFrom } from '../helpers/location_accessor'

const isNumber = value => typeof value === 'number'

class AnnoState {
  constructor (annoData) {
    if (!annoData) {
      // TODO modify
      // let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      annoData = List(Repeat(List(Repeat(Set(), 9)), 9))
    }
    this._state = annoData
  }

  get (mayLocation) {
    let { top, left } = locationFrom(mayLocation)
    return this._state.get(top).get(left)
  }

  add ({ value, ...mayLocation }) {
    if (!isNumber(value)) {
      throw new Error('Invalid arg')
    }
    let { top, left } = locationFrom(mayLocation)
    let annoData = this._state.updateIn([top, left], set => set.add(value))
    return new AnnoState(annoData)
  }

  remove ({ value, ...mayLocation }) {
    if (!isNumber(value)) {
      throw new Error('Invalid arg')
    }
    let { top, left } = locationFrom(mayLocation)
    let annoData = this._state.updateIn([top, left], set => set.remove(value))
    return new AnnoState(annoData)
  }

  set ({ annos, ...mayLocation }) {
    let { top, left } = locationFrom(mayLocation)
    let annoData = this._state.setIn([top, left], annos)
    return new AnnoState(annoData)
  }

  clear (mayLocation) {
    let { top, left } = locationFrom(mayLocation)
    let annoData = this._state.setIn([top, left], Set())
    return new AnnoState(annoData)
  }

  toJS () {
    return this._state.toJS()
  }
}

export default AnnoState
