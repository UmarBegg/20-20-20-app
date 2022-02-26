import React, { useEffect, useState } from "react"

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(10) //20mins in seconds

  useEffect(() => {
    if (remainingTime > 0) {
      const intervalID = setInterval(() => {
        setRemainingTime(remainingTime - 1)
      }, 1000)
      return () => clearInterval(intervalID)
    }
  }, [remainingTime])

  const zeroAdded = (time) => {
    if (time.length === 1) {
      time = "0" + time
    }
    return time
  }

  const remainingMinutes = Math.floor(remainingTime / 60).toString()
  const remainingSeconds = (remainingTime - remainingMinutes * 60).toString()

  return (
    <div>
      {zeroAdded(remainingMinutes)} : {zeroAdded(remainingSeconds)}
    </div>
  )
}

export default CountdownTimer
