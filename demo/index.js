import React from 'react'
import ReactDOM from 'react-dom'
import Numberplace from '../lib'
import data from './data.json'

const gameDataArray = data[0].split('')
const gameData = []
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    gameData[i] = gameData[i] || []
    gameData[i][j] = gameDataArray[i * 9 + j]
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <h2 className='title'>Numberplace DEMO</h2>
      <div className='wrap'>
        <div className='content'>
          <Numberplace
            gameData={gameData}
          />
        </div>
      </div>
    </div>,
    document.getElementById('site')
  )
})
