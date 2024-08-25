import {
  WorkContainer,
  WorkTitle,
  WorkSubtitle,
  MotivationalMessage,
} from './styles'
import { TimeDisplay } from '../../styles/TimeDisplay'

const WorkDisplay = ({ remainingTime }) => {
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <WorkContainer>
      <WorkTitle>Time to Work!</WorkTitle>
      <WorkSubtitle>Focus on your tasks. You're doing great!</WorkSubtitle>
      <MotivationalMessage>
        "Success is the sum of small efforts, repeated day in and day out."
      </MotivationalMessage>
      <TimeDisplay>{formatTime(remainingTime)}</TimeDisplay>
    </WorkContainer>
  )
}

export default WorkDisplay
