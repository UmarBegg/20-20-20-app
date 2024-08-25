import { useState } from 'react'
import {
  SetupContainer,
  SetupLabel,
  SetupInput,
  StartButton,
  Title,
} from './styles'

const Setup = ({ onStart }) => {
  const [workDuration, setWorkDuration] = useState(20) // Default 20 minutes
  const [breakDuration, setBreakDuration] = useState(20) // Default 20 seconds

  const handleWorkDurationChange = (e) => {
    const value = Math.max(Number(e.target.value), 0.1) // Ensure minimum value of 1
    setWorkDuration(value)
  }

  const handleBreakDurationChange = (e) => {
    const value = Math.max(Number(e.target.value), 1) // Ensure minimum value of 1
    setBreakDuration(value)
  }

  const handleStart = () => {
    onStart(workDuration, breakDuration)
  }

  return (
    <SetupContainer>
      <Title>Set Your Timer</Title>
      <div>
        <SetupLabel>
          Work Duration (minutes):
          <SetupInput
            type="number"
            value={workDuration}
            onChange={handleWorkDurationChange}
          />
        </SetupLabel>
        <SetupLabel>
          Break Duration (seconds):
          <SetupInput
            type="number"
            value={breakDuration}
            onChange={handleBreakDurationChange}
          />
        </SetupLabel>
      </div>
      <StartButton onClick={handleStart}>Start Timer</StartButton>
    </SetupContainer>
  )
}

export default Setup
