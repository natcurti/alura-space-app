import { styled } from "styled-components";
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header";
import Banner from "./components/Banner";
import AsideMenu from "./components/AsideMenu";
import Gallery from "./components/Gallery";
import pictures from "./pictures.json";
import { useState } from "react";
import Modal from "./components/Modal";

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [galleryPics, setGalleryPics] = useState(pictures);

  return (
    <>
      <BackgroundGradient>
        <GlobalStyle/>
        <AppContainer>
          <Header/>
          <MainContainer>
            <AsideMenu/>
            <GalleryContent>
              <Banner/>
              <Gallery pictures = {galleryPics}/>
            </GalleryContent>
          </MainContainer>
        </AppContainer>
        <Modal/>       
      </BackgroundGradient>
    </>
  )
}

export default App
