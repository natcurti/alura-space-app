import iconClose from "/icons/close.png";
import styled from "styled-components";

const BtnCloseStyled = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    top: 1rem;
    right: 3rem;
    cursor: pointer;
`

const BtnClose = () => {
    return (
        <BtnCloseStyled>
            <img src={iconClose} alt="Símbolo Botão Fechar"/>
        </BtnCloseStyled>
    )
}

export default BtnClose;