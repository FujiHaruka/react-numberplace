import { List, Record, Set } from 'immutable'
import { locationFrom } from '../helpers/location_accessor'

const HistoryRecord = Record({
  type: 0, // HistoryType
  value: 0,
  prevCellValue: 0,
  prevAnnos: Set(),
  left: 0,
  top: 0
})

/**
 * HistoryRecord List
 */
class History {
  constructor (list = List()) {
    this._list = List.isList(list) ? list : List(list)
    this.size = this._list.size
  }

  push (recordObj) {
    let location = locationFrom(recordObj)
    let record = HistoryRecord({ ...recordObj, ...location })
    return new History(this._list.push(record))
  }

  pop () {
    return new History(this._list.pop())
  }

  last () {
    return this._list.last()
  }

  toJS () {
    return this._list.toJS()
  }
}

export default History
