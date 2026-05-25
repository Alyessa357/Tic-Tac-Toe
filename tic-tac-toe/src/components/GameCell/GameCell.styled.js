// import styled from "styled-components";
import styled, { keyframes, css } from "styled-components";

const highlightPulse = keyframes`
    0% {
        box-shadow: 0 0 0px #8437f9;
    }
    50% {
        box-shadow: 0 0 18px 4px #8437f9;
    }
    100% {
        box-shadow: 0 0 10px 2px #8437f9;
    }
`;

export const CellStyle = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    font-size: 2.5rem;
    border: none;
    width: min(18vw, 7rem, 20vh);
    height: min(18vw, 7rem, 20vh);
    border-radius: 2rem;
    box-shadow: 5px 8px ${(props) => props.theme.colors.gray};
    cursor: pointer;
    padding: 1.5rem;
    transition: box-shadow 0.3s ease, border 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => props.$highlighted && css`
        border: 3px solid #8437f9;
        animation: ${highlightPulse} 0.6s ease-out forwards;
    `}

    &:hover {
        // box-shadow: 5px 8px ${(props) => props.theme.colors.yellow};
        ${(props) => props.$available && css`
            box-shadow: 5px 8px ${props.theme.colors.yellow};
            cursor: pointer;
        `}
        ${(props) => !props.$available && css`
            cursor: default;
        `}
    }

    .game-icon {
        fill: ${(props) => props.theme.colors.text};
        width: 60%;
        height: 60%;
    }

    /* responsive design */
    @media (min-width: 2560px) {
        width: min(14vw, 12rem, 22vh);
        height: min(14vw, 12rem, 22vh);
        border-radius: 3.5rem;
        padding: 4rem;
        font-size: 4rem;
        box-shadow: 7px 12px ${(props) => props.theme.colors.gray};
    }
    @media (max-width: 1024px) {
        width: min(18vw, 6.5rem, 19vh);
        height: min(18vw, 6.5rem, 19vh);
        border-radius: 2rem;
        padding: 1.3rem;
        font-size: 2rem;
    }
    @media (max-width: 768px) {
        width: min(20vw, 5.5rem, 18vh);
        height: min(20vw, 5.5rem, 18vh);
        border-radius: 1.5rem;
        padding: 1.5rem;
        font-size: 2rem;
        box-shadow: 3px 5px ${(props) => props.theme.colors.gray};
    }
    @media (max-width: 480px) {
        width: min(22vw, 4.5rem, 16vh);
        height: min(22vw, 4.5rem, 16vh);
        border-radius: 1.2rem;
        padding: 1.2rem;
        font-size: 1.5rem;
        box-shadow: 2px 4px ${(props) => props.theme.colors.gray};
    }
    @media (max-width: 359px) {
        width: min(24vw, 3.8rem, 14vh);
        height: min(24vw, 3.8rem, 14vh);
        border-radius: 1rem;
        padding: 1rem;
        font-size: 1.2rem;
        box-shadow: 2px 3px ${(props) => props.theme.colors.gray};
    }
`