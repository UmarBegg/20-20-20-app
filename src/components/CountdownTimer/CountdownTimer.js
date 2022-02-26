import React, { useEffect, useState } from "react"

const CountdownTimer = ({ defaultTime }) => {
  const [remainingTime, setRemainingTime] = useState(defaultTime)

  useEffect(() => {
    if (remainingTime > 0) {
      const intervalID = setInterval(() => {
        setRemainingTime(remainingTime - 1)
      }, 1000)
      return () => clearInterval(intervalID)
    }
  }, [remainingTime])

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
      {remainingMinutes} : {remainingSeconds}
    </div>
  )
}

export default CountdownTimer
