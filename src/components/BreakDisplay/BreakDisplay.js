import { BreakContainer } from './styles'
import { TimeDisplay } from '../../styles/TimeDisplay'

const BreakDisplay = ({ remainingTime }) => {
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <BreakContainer>
      <p>Take a 20-second break!</p>
      <p>Look at something 20 feet away.</p>
      <p>Your eyes will thank you.</p>
      <TimeDisplay>{formatTime(remainingTime)}</TimeDisplay>
    </BreakContainer>
  )
}

export default BreakDisplay
