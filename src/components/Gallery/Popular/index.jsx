import styled from "styled-components";

const PopularImageStyled = styled.div`
    width: 100%;
    height: 9rem;
    border-radius: 0.625rem;
    margin-bottom: 1rem;
    overflow: hidden;

    img{
        width: 100%;
        height: 9rem;
        object-fit: cover;
    }

`

const PopularImage = ({picture}) => {
    return (
        <PopularImageStyled>
            <img src={picture.path} alt={picture.alt}/>
        </PopularImageStyled>  
    )
}

export default PopularImage;