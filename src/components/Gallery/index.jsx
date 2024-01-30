import Title from "../Title"
import Tags from "../Gallery/Tags";
import styled from "styled-components";

const GalleryContainer = styled.div`
    display: flex;
`
const SectionPictures = styled.section`
    flex-grow: 1;
`

const SectionPopular = styled.section`

`


const Gallery = () => {
    return (
        <>
        <Tags/>
        <GalleryContainer>
            <SectionPictures>
                <Title title="Navegue pela galeria"/>
            </SectionPictures>
            <SectionPopular>
                <Title title="Populares"/>
            </SectionPopular>
        </GalleryContainer>
        
        </>

    )
}

export default Gallery;