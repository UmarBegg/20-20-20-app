import React, { useEffect, useState } from 'react'
import WorkDisplay from './WorkDisplay'
import BreakDisplay from './BreakDisplay'

const CountdownView = ({ workDuration, breakDuration, onReset }) => {
  const [remainingTime, setRemainingTime] = useState(workDuration * 60) // Convert minutes to seconds
  const [isBreakTime, setIsBreakTime] = useState(false)

  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission()
    }

    const intervalID = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1
        return newTime >= 0 ? newTime : 0 // Ensure time doesn't go negative
      })
    }, 1000)

    if (remainingTime === 0 && !isBreakTime) {
      sendNotification(
        'Time to take a break!',
        'Look at something 20 feet away for your break duration.'
      )
      setIsBreakTime(true)
      setRemainingTime(breakDuration) // Use custom break duration
    } else if (remainingTime === 0 && isBreakTime) {
      sendNotification('Break over!', 'Time to get back to work.')
      setIsBreakTime(false)
      setRemainingTime(workDuration * 60) // Reset to custom work duration
    }

    return () => clearInterval(intervalID)
  }, [remainingTime, isBreakTime, workDuration, breakDuration])

  const sendNotification = (title, message) => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
        silent: true, // Ensure the notification is soundless
        icon: '/path/to/icon.png', // Optional: add your own icon
      })
    }
  }

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {isBreakTime ? <BreakDisplay /> : <WorkDisplay />}
      <div style={{ fontSize: '48px', marginTop: '20px' }}>
        {formatTime(remainingTime)}
      </div>
      <button
        onClick={onReset}
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Reset Timer
      </button>
    </div>
  )
}

export default CountdownView
