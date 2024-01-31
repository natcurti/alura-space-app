import tags from './tags.json';
import styled from 'styled-components';

const TagsContainer = styled.div`
    margin: 3.5rem 0 2.45rem 0;
    display: flex;
`

const TagsTitle = styled.p`
    width: 13rem;
    color: #D9D9D9;
    font-size: 1.25rem;
`

const TagButton = styled.button`
    background-color: #44566F;
    color: white;
    border-radius: 0.625rem;
    margin-right: 1.5rem;
    font-size: 1.5rem;
    border: 2px solid ${props => props.$isActive ? '#7B78E5' : 'transparent'};
    &:hover {
      cursor: pointer;
    }
`
const Tags = ({isActive, changeSelectedTag, selectedTag}) => {    
    return (
        <TagsContainer>
            <TagsTitle>Busque por tags:</TagsTitle>
            {tags.map((tag) => {
                selectedTag.id === tag.id ? isActive = true : isActive = false

                return (
                    <TagButton 
                        key={tag.id} 
                        $isActive={isActive} 
                        onClick={() => changeSelectedTag(tag)}
                    >
                        {tag.title}
                    </TagButton>
                )
            })}
        </TagsContainer>    
    )    
}

export default Tags