import styled from "styled-components";

export const PlayerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem;
    color:  ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};

     /* responsive design */
    @media (min-width: 2560px) {
        margin: 8rem;
    }
    @media (max-width: 1024px) {
        margin: 3rem;
    }
    @media (max-width: 768px) {
        margin: 1.5rem;
    }
    @media (max-width: 480px) {
        margin: 1rem;
    }
    @media (max-width: 359px) {
        margin: 0.6rem;
    }
`
export const AvatarWrapper = styled.div`
    div {
        display: flex;
        height: 10rem;
        width: 10rem;
        filter: ${(props) => props.isPlayerActive ? "" : 'grayscale(90%)'};
    }

    /* responsive design */
    @media (min-width: 2560px) {
        div {
            height: 14rem;
            width: 14rem;
        }
    }
    @media (max-width: 1024px) {
        div {
            height: 7rem;
            width: 7rem;
        }
    }
    @media (max-width: 768px) {
        div {
            height: 5.5rem;
            width: 5.5rem;
        }
    }
    @media (max-width: 480px) {
        div {
            height: 4rem;
            width: 4rem;
        }
    }
    @media (max-width: 359px) {
        div {
            height: 3rem;
            width: 3rem;
        }
    }

`