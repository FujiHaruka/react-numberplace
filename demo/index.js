import React from 'react'
import ReactDOM from 'react-dom'
import Numberplace from '../lib'
import data from './data.json'

const gameDataArray = data[0].split('')
const gameData = []
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    gameData[i] = gameData[i] || []
    gameData[i][j] = Number(gameDataArray[i * 9 + j])
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <div className='wrap'>
        <div className='content'>
          <h2 className='title'>Numberplace DEMO</h2>
          <Numberplace
            className='game'
            gameData={gameData}
            onFinished={() => window.alert('FINISHED')}
          />
        </div>
      </div>
    </div>,
    document.getElementById('site')
  )
})
