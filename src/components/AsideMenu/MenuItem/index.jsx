import styled from "styled-components";

const MenuItemStyled = styled.li`
   font-size: 24px;
   line-height: 29px;
   margin-bottom: 30px;
   cursor: pointer;
   color: ${props => props.$isActive ? '#7B78E5' : '#d9d9d9'};
   font-family: ${props => props.$isActive ? 'GandhiSansBold' : 'GandhiSansRegular'};
   display: flex;
   align-items: center;
   gap: 22px;
`

const MenuItem = ({children, iconActive, iconInactive, isActive = false}) => {
    return (
        <>
            <MenuItemStyled $isActive={isActive}>
                <img src={isActive ? iconActive : iconInactive} alt="Ícone do Menu"/>
                {children}
            </MenuItemStyled>
        </>
    )
}

export default MenuItem;