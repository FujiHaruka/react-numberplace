import React from 'react'
import ReactDOM from 'react-dom'
import Numberplace from '../lib'
import data from './data.json'
import parseInitialProps from '../lib/helpers/parseInitialProps'

class App extends React.Component {
  constructor (props) {
    super(props)
    const s = this
    s.onUpdateNumberPlace = s.onUpdateNumberPlace.bind(s)
    s.state = {
      numberPlaceProps: parseInitialProps(props.puzzleStr)
    }
  }

  onUpdateNumberPlace (nextProps) {
    const s = this
    const {numberPlaceProps} = s.state
    console.log(nextProps)
    s.setState({
      numberPlaceProps: Object.assign({}, numberPlaceProps, nextProps)
    })
  }

  render () {
    const s = this
    const {numberPlaceProps} = s.state
    return (
      <div>
        <div className='wrap'>
          <div className='content'>
            <h2 className='title'>Numberplace DEMO</h2>
            <Numberplace
              className='game'
              onFinished={() => window.alert('FINISHED')}
              onUpdate={s.onUpdateNumberPlace}
              {...numberPlaceProps}
            />
          </div>
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App puzzleStr={data[0]} />,
    document.getElementById('site')
  )
})
