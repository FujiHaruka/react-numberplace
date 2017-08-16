import { Mode } from '../constants'
import { CellState, AnnoState, FixedCell, History } from '../states'

const parseInitialProps = (puzzleStr) => {
  const gameDataArray = puzzleStr.split('')
  const gameData = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      gameData[i] = gameData[i] || []
      gameData[i][j] = Number(gameDataArray[i * 9 + j])
    }
  }
  return {
    focusedCell: {},
    mode: Mode.ANSWER,
    history: new History().state,
    cellState: new CellState(gameData).state,
    annoState: new AnnoState().state,
    fixedCell: new FixedCell(gameData).state
  }
}

export default parseInitialProps
