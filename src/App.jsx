import FlipCountdown from '@rumess/react-flip-countdown';
import { useState } from 'react';
import "./App.css"


function App() {
  const [showTimer, setShowTimer] = useState(true)
  return (
    <div className='container'>
      {
        showTimer ?
          <FlipCountdown
            size='large'
            hideYear
            hideMonth
            hideDay
            hourTitle=' '
            minuteTitle=' '
            secondTitle=' '
            endAt={new Date(Date.now() + 10000).toUTCString()}
            onTimeUp={() => setShowTimer(false)}

          /> :
          <div className='message-text'>
            <p>La mulți ani,</p>
            <p>Cluj-Napoca!</p>
          </div>
      }
    </div>
  )
}

export default App
