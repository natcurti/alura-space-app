import styled from "styled-components";
import Banner from "../Banner";
import AsideMenu from "../AsideMenu"

const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Container = () => {
    return (
        <ContainerStyled>
            <AsideMenu/>
            <Banner/>
        </ContainerStyled>
    )
}

export default Container;