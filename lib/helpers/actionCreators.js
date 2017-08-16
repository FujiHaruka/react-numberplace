import { HistoryType, Mode } from '../constants'
import _ from 'lodash'

const {
  PUT_ANSWER,
  PUT_ANNO,
  DELETE
} = HistoryType

export const focusCellFactory = ({cellIdx, sectionIdx, onUpdate}) => () => {
  onUpdate({
    focusedCell: {
      cellIdx,
      sectionIdx
    }
  })
}

export const putAnswerFactory = ({value, cell, cellState, history, onUpdate}) => () => {
  if (_.isEmpty(cell)) {
    return
  }
  const prevCellValue = cellState.get(cell)
  if (prevCellValue === value) {
    return
  }
  onUpdate({
    cellState: cellState.update({
      value,
      ...cell
    }).state,
    history: history.push({
      type: PUT_ANSWER,
      value,
      prevCellValue,
      ...cell
    }).state
  })
}

export const addAnnoFactory = ({ value, cell, annoState, history, onUpdate }) => () => {
  let prevAnnos = annoState.get(cell)
  if (prevAnnos.has(value)) {
    return
  }
  onUpdate({
    annoState: annoState.add({
      value,
      ...cell
    }).state,
    history: history.push({
      type: PUT_ANNO,
      value,
      ...cell
    }).state
  })
}

export const toggleModeFactory = ({mode, onUpdate}) => () => {
  let toggle = {
    [Mode.ANSWER]: Mode.ANNOTATION,
    [Mode.ANNOTATION]: Mode.ANSWER
  }
  onUpdate({
    mode: toggle[mode]
  })
}

export const clearCellFactory = ({cell, cellState, annoState, history, onUpdate}) => () => {
  if (_.isEmpty(cell)) {
    return
  }
  const prevCellValue = cellState.get(cell)
  const prevAnnos = annoState.get(cell)
  if (prevCellValue === 0 && prevAnnos.size === 0) {
    return
  }
  onUpdate({
    cellState: cellState.update({
      value: 0,
      ...cell
    }).state,
    annoState: annoState.clear({
      ...cell
    }).state,
    history: history.push({
      type: DELETE,
      prevCellValue,
      prevAnnos,
      ...cell
    }).state
  })
}

export const undoFactory = ({cellState, annoState, history, onUpdate}) => () => {
  let last = history.last()
  if (!last) {
    return
  }
  let {
    type,
    value,
    prevCellValue,
    prevAnnos,
    left,
    top
  } = last
  let location = { top, left }
  let nextHistory = history.pop()
  switch (type) {
    case PUT_ANSWER:
      onUpdate({
        cellState: cellState.update({
          value: prevCellValue,
          ...location
        }).state,
        history: nextHistory.state
      })
      return
    case PUT_ANNO:
      onUpdate({
        annoState: annoState.remove({
          value,
          ...location
        }).state,
        history: nextHistory.state
      })
      return
    case DELETE:
      onUpdate({
        cellState: cellState.update({
          value: prevCellValue,
          ...location
        }).state,
        annoState: annoState.set({
          annos: prevAnnos,
          ...location
        }).state,
        history: nextHistory.state
      })
      return
    default:
      throw new Error('Invalid type')
  }
}
