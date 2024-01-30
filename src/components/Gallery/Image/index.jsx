import styled from "styled-components";
import favoriteIcon from "/icons/favorite-active.png";
import expandIcon from "/icons/expand.png";

const ImageContainer = styled.figure`
    width: ${(props) => (props.$expanded ? '90%' : '22.5rem')};
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    margin: 0;

    img{
        width: 100%;
        object-fit: contain;
    }

    figcaption{
        background-color: #001634;
        height: 5rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        padding: 1rem;
        box-sizing: border-box;

        h3{
            color: white;
            margin: 0;
            font-size: 1.25rem;
            font-weight: bold;
        }

        footer{
            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                margin: 0;
                color: white;
                font-size: 1rem;
            }

            div{
                display: flex;
                gap: 1.5rem;

                button{
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                }
            }
        }
    }

`


const Image = ({title, font, path, id, tagId, expanded = "false"}) => {
    return (
        <ImageContainer expanded={expanded}>
            <img src={path} alt={title}/>
            <figcaption>
                <h3>{title}</h3>
                <footer>
                    <p>{font}</p>
                    <div>
                        <button>
                            <img src={favoriteIcon}/>
                        </button>
                        <button>
                            <img src={expandIcon}/>
                        </button>
                    </div>
                </footer>           
            </figcaption>
        </ImageContainer>
    )
}

export default Image;