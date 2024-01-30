import banner from "../../assets/banner.png"
import styled from "styled-components";

const BannerStyled = styled.div`
    overflow: hidden;
    width: 60rem;
    height: 20rem;
    border-radius: 1.25rem;
    position: relative;
`

const BannerImg = styled.img`
    object-fit: contain;
`

const BannerText = styled.h1`
    position: absolute;
    top: 4.5rem;
    left: 4rem;
    width: 18rem;
    color: white;
    font-size: 2.5rem;
    font-weight: 400;
`

const Banner = () => {
    return (
        <BannerStyled>
            <BannerImg src={banner}/>
            <BannerText>A galeria mais completa de fotos do espaço!</BannerText>
        </BannerStyled>
    )
}

export default Banner;