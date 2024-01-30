import Title from "../Title"
import Tags from "../Gallery/Tags";
import styled from "styled-components";
import Image from "./Image";

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


const Gallery = ({pictures = []}) => {
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
                        title={item.title} 
                        font={item.font} 
                        path={item.path} 
                        id={item.id} 
                        tagId={item.tagId}
                    />)}
                </ContainerPictures>
            </SectionPictures>
            <SectionPopular>
                <Title title="Populares"/>
            </SectionPopular>
        </GalleryContainer>
        
        </>

    )
}

export default Gallery;