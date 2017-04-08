import { getState, setState } from '../state_exposer'
import { HistoryType } from '../constants'

const {
  PUT_ANSWER,
  PUT_ANNO,
  DELETE
} = HistoryType

export const putAnswer = ({ value, ...mayLocation }) => {
  let { cellState, history } = getState()
  let prevCellValue = cellState.get(mayLocation)
  if (prevCellValue === value) {
    return
  }
  setState({
    cellState: cellState.update({
      value,
      ...mayLocation
    }),
    history: history.push({
      type: PUT_ANSWER,
      value,
      prevCellValue,
      ...mayLocation
    })
  })
}

export const addAnno = ({ value, ...mayLocation }) => {
  let { annoState, history } = getState()
  let prevAnnos = annoState.get(mayLocation)
  if (prevAnnos.has(value)) {
    return
  }
  setState({
    annoState: annoState.add({
      value,
      ...mayLocation
    }),
    history: history.push({
      type: PUT_ANNO,
      value,
      ...mayLocation
    })
  })
}

export const clearCell = (mayLocation) => {
  let { cellState, annoState, history } = getState()
  let prevCellValue = cellState.get(mayLocation)
  let prevAnnos = annoState.get(mayLocation)
  if (prevCellValue === 0 && prevAnnos.size === 0) {
    return
  }
  setState({
    cellState: cellState.update({
      value: 0,
      ...mayLocation
    }),
    annoState: annoState.clear({
      ...mayLocation
    }),
    history: history.push({
      type: DELETE,
      prevCellValue,
      prevAnnos,
      ...mayLocation
    })
  })
}

export const undo = () => {
  let { cellState, annoState, history } = getState()
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
      setState({
        cellState: cellState.update({
          value: prevCellValue,
          ...location
        }),
        history: nextHistory
      })
      return
    case PUT_ANNO:
      setState({
        annoState: annoState.remove({
          value,
          ...location
        }),
        history: nextHistory
      })
      return
    case DELETE:
      setState({
        cellState: cellState.update({
          value: prevCellValue,
          ...location
        }),
        annoState: annoState.set({
          annos: prevAnnos,
          ...location
        }),
        history: nextHistory
      })
      return
    default:
      throw new Error('Invalid type')
  }
}

export default {
  putAnswer,
  addAnno,
  clearCell,
  undo
}
