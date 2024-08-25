import React, { useState } from 'react'
import styled from 'styled-components'
import Setup from './components/Setup'
import CountdownView from './components/CountdownView'

const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [workDuration, setWorkDuration] = useState(20) // Default 20 minutes
  const [breakDuration, setBreakDuration] = useState(20) // Default 20 seconds

  const handleStart = (workDuration, breakDuration) => {
    setWorkDuration(workDuration)
    setBreakDuration(breakDuration)
    setIsStarted(true)
  }

  const handleReset = () => {
    setIsStarted(false) // Go back to the setup screen
  }

  return (
    <MainBody>
      {!isStarted ? (
        <Setup onStart={handleStart} />
      ) : (
        <CountdownView
          workDuration={workDuration}
          breakDuration={breakDuration}
          onReset={handleReset}
        />
      )}
    </MainBody>
  )
}

export default App
