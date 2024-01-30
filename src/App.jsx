import { styled } from "styled-components";
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header";
import Container from "./components/Container";

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <>
      <BackgroundGradient>
        <GlobalStyle/>
        <Header/>
        <Container/>
      </BackgroundGradient>
    </>
  )
}

export default App
