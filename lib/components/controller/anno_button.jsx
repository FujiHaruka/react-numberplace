import React from 'react'
import c from 'classnames'
import {toggleModeFactory} from '../../helpers/actionCreators'
import { Mode } from '../../constants'

const AnnoButton = ({mode, onUpdate}) =>
  <div
    className={c(
      'rn-buttons-action',
      mode === Mode.ANSWER ? 'rn-buttons-annoColor' : 'rn-buttons-annoActiveColor'
    )}
    onClick={toggleModeFactory({mode, onUpdate})}
    >
    Anno
  </div>

export default AnnoButton
