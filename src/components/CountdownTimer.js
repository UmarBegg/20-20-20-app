import React, { useEffect, useState } from "react"
import WorkDisplay from "./WorkDisplay"
import BreakDisplay from "./BreakDisplay"

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(1200)
  const [isBreakTime, setIsBreakTime] = useState(false)

  useEffect(() => {
    if (remainingTime > 0) {
      const intervalID = setInterval(() => {
        setRemainingTime(remainingTime - 1)
      }, 1000)
      return () => clearInterval(intervalID)
    }
  }, [remainingTime])

  if (remainingTime === 0 && !isBreakTime) {
    setIsBreakTime(true)
    setRemainingTime(20)
  }

  if (remainingTime === 0 && isBreakTime) {
    setIsBreakTime(false)
    setRemainingTime(1200)
  }

  const zeroAdded = (time) => {
    if (time.length === 1) time = "0" + time
    return time
  }

  const remainingMinutes = zeroAdded(Math.floor(remainingTime / 60).toString())

  const remainingSeconds = zeroAdded(
    (remainingTime - remainingMinutes * 60).toString()
  )

  return (
    <div>
      {isBreakTime && <BreakDisplay />}
      {!isBreakTime && <WorkDisplay />}
      <span>
        {remainingMinutes} : {remainingSeconds}
      </span>
    </div>
  )
}

export default CountdownTimer
