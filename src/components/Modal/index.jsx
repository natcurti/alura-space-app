import Image from "../Gallery/Image";
import styled from "styled-components";
import BtnClose from "../BtnClose";

const ModalOverlay = styled.div`
    background-color: rgba(0,0,0, .5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
const DialogStyled = styled.dialog`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    padding: 0;
    width: 50rem;
    display: flex;
    justify-content: center;

`
const Modal = ({picture, toggleFavorite, onClose}) => {
    return (
        picture && <>
            <ModalOverlay/>
            <DialogStyled open={!!picture} onClose={onClose}>
                <Image picture={picture} expanded="true" toggleFavorite={toggleFavorite} />
                <form method="dialog" >
                    <BtnClose />
                </form>
            </DialogStyled>
        </>

    )
}

export default Modal;