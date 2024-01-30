import styled from "styled-components";
import MenuItem from "./MenuItem";

const AsideMenuStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const AsideMenu = () => {
    return (
        <aside>
            <nav>
                <AsideMenuStyled>
                    <MenuItem iconActive="/icons/home-active.png" iconInactive="/icons/home-inactive.png" isActive={true}>
                        Ínicio
                    </MenuItem>
                    <MenuItem iconActive="/icons/views-active.png" iconInactive="/icons/views-inactive.png">
                        Mais vistos
                    </MenuItem>
                    <MenuItem iconActive="/icons/like-active.png" iconInactive="/icons/like-inactive.png">
                        Mais curtidas
                    </MenuItem>
                    <MenuItem iconActive="/icons/news-active.png" iconInactive="/icons/news-inactive.png">
                        Novas
                    </MenuItem>
                    <MenuItem iconActive="/icons/surprise-me-active.png" iconInactive="/icons/surprise-me-inactive.png">
                        Surpreenda-me
                    </MenuItem>
                </AsideMenuStyled>
            </nav>
        </aside>

    )
}

export default AsideMenu;