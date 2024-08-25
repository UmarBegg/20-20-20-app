import WorkDisplay from '../WorkDisplay/WorkDisplay'
import BreakDisplay from '../BreakDisplay/BreakDisplay'
import useTimer from '../../hooks/useTimer'
import { CountdownContainer, ResetButton } from './styles'

const CountdownView = ({ workDuration, breakDuration, onReset }) => {
  const { remainingTime, isBreakTime, resetTimer } = useTimer(
    workDuration,
    breakDuration
  )

  return (
    <CountdownContainer>
      {isBreakTime ? (
        <BreakDisplay remainingTime={remainingTime} />
      ) : (
        <WorkDisplay remainingTime={remainingTime} />
      )}
      <ResetButton
        onClick={() => {
          resetTimer()
          onReset()
        }}
      >
        Reset Timer
      </ResetButton>
    </CountdownContainer>
  )
}

export default CountdownView
