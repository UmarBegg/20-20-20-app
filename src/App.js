import styled from "styled-components"
import CountdownTimer from "./components/CountdownTimer/CountdownTimer"
const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <MainBody>
      <CountdownTimer />
    </MainBody>
  )
}

export default App
