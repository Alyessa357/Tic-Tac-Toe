import styled from "styled-components";

export const ButtonWrapper = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.color ? props.color : props.theme.colors.secondary};
    padding: 20px 30px;
    min-width: 300px;
    font-size: 1.5rem;
    margin: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 400;

    &:hover {
        box-shadow: 0px 0px 10px ${(props) => props.theme.colors.purple};
        cursor: pointer;
    }

    /* responsive design */
    @media (min-width: 2560px) {
        padding: 28px 44px;
        min-width: 400px;
        font-size: 2rem;
        margin: 28px;
        border-radius: 14px;
    }
    @media (max-width: 768px) {
        padding: 14px 22px;
        min-width: 220px;
        font-size: 1.2rem;
        margin: 12px;
    }
    @media (max-width: 480px) {
        padding: 12px 18px;
        min-width: 180px;
        font-size: 1rem;
        margin: 8px;
        border-radius: 8px;
    }
    @media (max-width: 359px) {
        padding: 10px 14px;
        min-width: 140px;
        font-size: 0.85rem;
        margin: 6px;
        border-radius: 6px;
    }
`