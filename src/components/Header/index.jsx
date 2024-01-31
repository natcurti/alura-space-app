import {styled} from "styled-components";
import TextField from "../TextField";

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 13.25rem;
    }
`

const Header = ({searchField, changeSearch}) => {
    return (
        <HeaderStyled>
            <img src="/images/logo.png" alt="Space App Logo"/>
            <TextField searchField={searchField} changeSearch={changeSearch}/>
        </HeaderStyled>
    )
}

export default Header;