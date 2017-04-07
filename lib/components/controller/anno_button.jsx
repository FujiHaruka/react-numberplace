import React from 'react'
import c from 'classnames'
import styles from '../../styles/buttons.css'
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
      styles.action,
      mode === Mode.ANSWER ? styles.annoColor : styles.annoActiveColor
    )}
    onClick={toggleMode}
    >
    Anno
  </div>

export default AnnoButton
