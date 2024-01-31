import Title from "../Title"
import Tags from "../Gallery/Tags";
import styled from "styled-components";
import Image from "./Image";
import PopularImage from "./Popular";
import popularPics from "./Popular/popular.json";

const GalleryContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 60rem;
`
const SectionPictures = styled.section`
    width: 46rem;
`

const ContainerPictures = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`

const SectionPopular = styled.section`
    width: 13rem;
`

const BtnMore = styled.button`
    background-color: transparent;
    border: 2px solid #C98CF1;
    width: 100%;
    border-radius: 0.625rem;
    color: white;
    height: 3.5rem;
    cursor: pointer;
`


const Gallery = ({pictures = [], selectPicture, toggleFavorite}) => {
    return (
        <>
        <Tags/>
        <GalleryContainer>
            <SectionPictures>
                <Title title="Navegue pela galeria"/>
                <ContainerPictures>
                    {pictures.map((item) => 
                    <Image 
                        key={item.id}
                        picture={item}
                        onExpand={selectPicture}
                        toggleFavorite={toggleFavorite}
                    />)}
                </ContainerPictures>
            </SectionPictures>
            <SectionPopular>
                <Title title="Populares"/>
                {popularPics.map((item) => 
                    <PopularImage 
                        key={item.id}
                        picture={item}
                    />
                )}
                <BtnMore>Ver mais</BtnMore>
            </SectionPopular>
        </GalleryContainer>
        
        </>

    )
}

export default Gallery;