import styled from "styled-components";

const FooterStyled = styled.footer`
    margin-top: 4.5rem;
    background-color: #04244F;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 3rem;

    div{
        display: flex;
        align-items: center;
        gap: 2rem;
        img{
            width: 1.25rem;
        }
    }

    p{
        color: white;
    }
`

const Footer = () => {
    return (
        <FooterStyled>
            <div>
                <a href="www.facebook.com"><img src="/images/socials/facebook.svg"/></a>
                <a href="www.twitter.com"><img src="/images/socials/twitter.svg"/></a>
                <a href="www.instagram.com"><img src="/images/socials/instagram.svg"/></a>
            </div>
            <p>
                Desenvolvido por Natália Curti
            </p>
        </FooterStyled>
    )
}

export default Footer;