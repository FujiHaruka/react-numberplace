import React from 'react'
import c from 'classnames'
import { getState, setState } from '../../state_exposer'
import { Mode } from '../../constants'

const toggleMode = () => {
  let {
    mode
  } = getState()
  let toggle = {
    [Mode.ANSWER]: Mode.ANNOTATION,
    [Mode.ANNOTATION]: Mode.ANSWER
  }
  setState({
    mode: toggle[mode]
  })
}

const AnnoButton = ({ mode }) =>
  <div
    className={c(
      'rn-buttons-action',
      mode === Mode.ANSWER ? 'rn-buttons-annoColor' : 'rn-buttons-annoActiveColor'
    )}
    onClick={toggleMode}
    >
    Anno
  </div>

export default AnnoButton
