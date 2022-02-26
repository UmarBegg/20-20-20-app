import styled from "styled-components"
import BreakTime from "./components/BreakTime/BreakTime"
import WorkingTime from "./components/WorkingTime/WorkingTime"
import { useState } from "react"

const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  const [isBreakTime, setIsBreakTime] = useState(false)

  return (
    <MainBody>
      <WorkingTime defaultTime={1200} />
      <BreakTime defaultTime={20} />
    </MainBody>
  )
}

export default App
