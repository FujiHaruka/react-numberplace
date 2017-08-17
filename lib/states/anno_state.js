import { List, Repeat, Set } from 'immutable'
import { locationFrom } from '../helpers/location_accessor'

const isNumber = value => typeof value === 'number'

class AnnoState {
  constructor (arg) {
    const isState = List.isList(arg)
    if (isState) {
      this._state = arg
    } else {
      this._state = List(Repeat(List(Repeat(Set(), 9)), 9))
    }
  }

  static fromList (state) {
    return new AnnoState(state)
  }

  static fromJS (array) {
    const list = List(
      array.map((innerList) => List(
        innerList.map((set) => Set(set))
      ))
    )
    return AnnoState.fromList(list)
  }

  get state () {
    return this._state
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
