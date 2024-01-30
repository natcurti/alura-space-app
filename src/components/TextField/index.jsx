import {styled} from "styled-components";
import iconSearch from "/icons/search.png";

const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    
`
const InputStyled = styled.input`
    width: 37.625rem;
    height: 3.5rem;
    background-color: transparent;
    border: 2px solid #C98CF1;
    border-radius: 0.625rem;
    padding-left: 1rem;
    box-sizing: border-box;
    font-size: 1rem;

    &::placeholder{
        color: white;
        font-size: 1.25rem;
    }
`

const InputIcon = styled.img`
    position: absolute;
    right: 0.85rem;
`

const TextField = () => {
    return (
        <>
            <InputContainer>
                <InputStyled placeholder="O que você procura?"/>
                <InputIcon src={iconSearch} alt="Ícone de Lupa"/>
            </InputContainer>            
        </>
    )
}

export default TextField;