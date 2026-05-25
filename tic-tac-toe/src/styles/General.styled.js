import styled from "styled-components"; 

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.columnBased ? "column" : "row"};
    ${(props) => props.columnBased ? "height: 80vh;" : ""};
    width: 100%;
    max-width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0 2rem;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;

    /* responsive design */
    @media (min-width: 2560px) {
        padding: 0 4rem;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 1rem;
    }
    @media (max-width: 768px) {
        padding: 0.75rem;
    }
    @media (max-width: 480px) {
        padding: 0.5rem;
    }
    @media (max-width: 359px) {
        padding: 0.25rem;
    }
`

export const Title = styled.h1`
    color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};
    font-size: 3rem;
    font-family: 'Pacifico', cursive;
    background-color: transparent;

    /* responsive design */
    @media (min-width: 2560px) {
        font-size: 4.5rem;
    }
    @media (max-width: 1024px) {
        font-size: 2.5rem;
    }
    @media (max-width: 768px) {
        font-size: 2rem;
    }
    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
    @media (max-width: 359px) {
        font-size: 1.3rem;
    }
`

export const Subtitle = styled.h1`
    color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: 200;
    background-color: transparent;
    padding: 10px;

     /* responsive design */
    @media (min-width: 2560px) {
        font-size: 2.2rem;
        padding: 14px;
    }
    @media (max-width: 768px) {
        font-size: 1.2rem;
        padding: 6px;
    }
    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 4px;
    }
    @media (max-width: 359px) {
        font-size: 0.85rem;
        padding: 3px;
    }
`

export const Text = styled.p`
    color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};
    font-size: 1.2rem;
    background-color: transparent;

    /* responsive design */
    @media (min-width: 2560px) {
        font-size: 1.8rem;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
    @media (max-width: 359px) {
        font-size: 0.75rem;
    }
`