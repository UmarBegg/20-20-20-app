import { useState, useEffect } from 'react'

const useTimer = (initialWorkDuration, initialBreakDuration) => {
  const [remainingTime, setRemainingTime] = useState(initialWorkDuration * 60) // Convert minutes to seconds
  const [isBreakTime, setIsBreakTime] = useState(false)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 1, 0)) // Ensure time doesn't go negative
    }, 1000)

    if (remainingTime === 0 && !isBreakTime) {
      sendNotification(
        'Time to take a break!',
        'Look at something 20 feet away for your break duration.'
      )
      setIsBreakTime(true)
      setRemainingTime(initialBreakDuration) // Use custom break duration
    } else if (remainingTime === 0 && isBreakTime) {
      sendNotification('Break over!', 'Time to get back to work.')
      setIsBreakTime(false)
      setRemainingTime(initialWorkDuration * 60) // Reset to custom work duration
    }

    return () => clearInterval(intervalID)
  }, [remainingTime, isBreakTime, initialWorkDuration, initialBreakDuration])

  const resetTimer = () => {
    setRemainingTime(initialWorkDuration * 60)
    setIsBreakTime(false)
  }

  const sendNotification = (title, message) => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
        silent: true, // Ensure the notification is soundless
      })
    }
  }

  return { remainingTime, isBreakTime, resetTimer }
}

export default useTimer
