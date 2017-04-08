import CellState from '../../lib/states/cell_state'
import { locationFrom } from '../../lib/helpers/location_accessor'
import { Range } from 'immutable'
import { equal, notEqual } from 'assert'

const parseData = (data) => {
  let array = data.split('')
  let gameData = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      gameData[i] = gameData[i] || []
      gameData[i][j] = array[i * 9 + j]
    }
  }
  return gameData
}
const DATA = '400015000000060000085300000070030004200090005000602003003050209000041306901000000'
const DATA2 = '186793452923854671745126938854912763612537849390468215561279384479385126238641597'
const ANSWER = '186793452923854671745126938854912763612537849397468215561279384479385126238641597'
const WRONG = '186793452923854671745129938854912763612537849397468215561279384479385126238641597'
const gameData = parseData(DATA)
const gameData2 = parseData(DATA2)
const answerData = parseData(ANSWER)
const wrongData = parseData(WRONG)

describe('cell_state', () => {
  it('constructor', () => {
    let state = new CellState(gameData)
    let dataStr = state.toJS().map(arr => arr.join('')).join('')
    equal(dataStr, DATA)

    let again = new CellState(state._state)
    let dataStr2 = again.toJS().map(arr => arr.join('')).join('')
    equal(dataStr2, DATA)
  })

  it('get', () => {
    let state = new CellState(gameData)
    {
      let value = state.get({ left: 0, top: 0 })
      equal(value, 4)
    }
    {
      let value = state.get({ left: 1, top: 3 })
      equal(value, 7)
    }
    {
      let value = state.get({ left: 8, top: 6 })
      equal(value, 9)
    }
    for (let sectionIdx of Range(0, 9)) {
      for (let cellIdx of Range(0, 9)) {
        let one = state.get({ sectionIdx, cellIdx })
        let location = locationFrom({ sectionIdx, cellIdx })
        let other = state.get(location)
        equal(one, other)
      }
    }
  })

  it('update', () => {
    let state = new CellState(gameData)
    let sectionIdx = 3
    let cellIdx = 5
    let value = 10
    let updated = state.update({ value, sectionIdx, cellIdx })
    equal(updated.get({ sectionIdx, cellIdx }), value)
    notEqual(state.get({ sectionIdx, cellIdx }), value)
  })

  it('isFilled', () => {
    equal(new CellState(gameData).isFilled(), false)
    equal(new CellState(gameData2).isFilled(), false)
    equal(new CellState(answerData).isFilled(), true)
  })

  it('isFinished', () => {
    equal(new CellState(answerData).isFinished(), true)
    equal(new CellState(gameData2).isFinished(), false)
    equal(new CellState(wrongData).isFinished(), false)
  })
})

/* global describe it */
