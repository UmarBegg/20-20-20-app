import React, { useState } from 'react'

const Setup = ({ onStart }) => {
  const [workDuration, setWorkDuration] = useState(20) // Default 20 minutes
  const [breakDuration, setBreakDuration] = useState(20) // Default 20 seconds

  const handleStart = () => {
    onStart(workDuration, breakDuration)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Set Your Timer</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Work Duration (minutes):
          <input
            type="number"
            value={workDuration}
            onChange={(e) => setWorkDuration(Number(e.target.value))}
            style={{ marginLeft: '10px', width: '50px' }}
          />
        </label>
        <label style={{ marginLeft: '20px' }}>
          Break Duration (seconds):
          <input
            type="number"
            value={breakDuration}
            onChange={(e) => setBreakDuration(Number(e.target.value))}
            style={{ marginLeft: '10px', width: '50px' }}
          />
        </label>
      </div>
      <button onClick={handleStart} style={{ padding: '10px 20px' }}>
        Start Timer
      </button>
    </div>
  )
}

export default Setup
