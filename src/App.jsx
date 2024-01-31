import { styled } from "styled-components";
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header";
import Banner from "./components/Banner";
import AsideMenu from "./components/AsideMenu";
import Gallery from "./components/Gallery";
import pictures from "./pictures.json";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

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
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [searchField, setSearchField] = useState('');
  const [selectedTag, setSelectedTag] = useState({
    "id": 0,
    "title": "Todas"
  });

  const changeSearch = (value) => {
    setSearchField(value);
  }

  const changeSelectedTag = (value) => {
    setSelectedTag(value);
  }

  useEffect(() => {
    const input = searchField.toUpperCase();
    const newArrayOfPics = galleryPics.filter((item) => (item.title.toUpperCase()).startsWith(input));
    searchField.length >= 1 && newArrayOfPics ? setGalleryPics(newArrayOfPics) : setGalleryPics(pictures);
  }, [searchField])

  useEffect(() => {
    const newArrayOfPics = galleryPics.filter((item) => item.tagId === selectedTag.id);
    newArrayOfPics.length > 0 ? setGalleryPics(newArrayOfPics) : setGalleryPics(pictures);
  }, [selectedTag])

  const toggleFavorite = (picture) => {
    if(picture.id === selectedPicture?.id){
      setSelectedPicture({
        ...selectedPicture,
        favorite: !selectedPicture.favorite
      })
    }

    setGalleryPics(galleryPics.map((item) => {
      return {
        ...item,
        favorite: item.id === picture.id ? !item.favorite : item.favorite
      }
    }))
  }

  return (
    <>
      <BackgroundGradient>
        <GlobalStyle/>
        <AppContainer>
          <Header searchField={searchField} changeSearch={changeSearch}/>
          <MainContainer>
            <AsideMenu/>
            <GalleryContent>
              <Banner/>
              <Gallery 
                selectedTag={selectedTag}
                changeSelectedTag={changeSelectedTag}
                pictures = {galleryPics}
                selectPicture={pic => setSelectedPicture(pic)}
                toggleFavorite={toggleFavorite}
              />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
        <Modal picture={selectedPicture} toggleFavorite={toggleFavorite} onClose={() => setSelectedPicture(null)}/>       
        <Footer/>
      </BackgroundGradient>
    </>
  )
}

export default App
