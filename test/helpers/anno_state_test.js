import AnnoState from '../../lib/states/anno_state'
import { equal, ok } from 'assert'

describe('anno_state', () => {
  it('constructor', () => {
    let state = new AnnoState()
    let another = new AnnoState(state._state)
    let array = another.toJS()
    equal(array.length, 9)
    equal(array[0].length, 9)
    equal(array[0][0].length, 0)
  })

  it('get and update', () => {
    let state = new AnnoState()
    let sectionIdx = 2
    let cellIdx = 3
    let id = { sectionIdx, cellIdx }
    let zero = state.get(id).size
    equal(zero, 0)

    let value = 3
    state = state.add({ value, ...id })
    ok(state.get(id).has(value))

    state = state.remove({ value, ...id })
    ok(!state.get(id).has(value))
  })
})

/* global describe it */
