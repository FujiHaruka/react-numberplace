import FixedCell from '../../lib/states/fixed_cell'
import { locationFrom } from '../../lib/helpers/location_accessor'
import { Range } from 'immutable'
import { equal } from 'assert'

const DATA = '400015000000060000085300000070030004200090005000602003003050209000041306901000000'
const gameDataArray = DATA.split('')
const gameData = []
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    gameData[i] = gameData[i] || []
    gameData[i][j] = Number(gameDataArray[i * 9 + j])
  }
}

describe('fixed_cell', () => {
  it('isFixed', () => {
    let fixed = new FixedCell(gameData)
    for (let sectionIdx of Range(0, 9)) {
      for (let cellIdx of Range(0, 9)) {
        let isFixed = fixed.isFixed({ sectionIdx, cellIdx })
        let { top, left } = locationFrom({ sectionIdx, cellIdx })
        equal(isFixed, gameData[top][left] > 0)
      }
    }
  })
})

/* global describe it */
