import styled from "styled-components";

const TitleStyled = styled.h2`
    color: #7B78E6;
    font-size: 32px;
`

const Title = ({title}) => {
    return (
        <TitleStyled>{title}</TitleStyled>
    )
}

export default Title;