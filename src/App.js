import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Setup from './components/Setup/Setup'
import CountdownView from './components/CountdownView/CountdownView'
import { theme } from './styles/theme'

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
  const [workDuration, setWorkDuration] = useState(20)
  const [breakDuration, setBreakDuration] = useState(20)

  const handleStart = (workDuration, breakDuration) => {
    setWorkDuration(workDuration)
    setBreakDuration(breakDuration)
    setIsStarted(true)
  }

  const handleReset = () => {
    setIsStarted(false)
  }

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
