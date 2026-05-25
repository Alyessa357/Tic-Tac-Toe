import styled, { keyframes } from "styled-components";

const spinUp = keyframes`
    0% {
        transform: translateY(100%) rotateX(-90deg);
        opacity: 0;
    }
    50% {
        transform: translateY(20%) rotateX(-20deg);
        opacity: 0.7;
    }
    100% {
        transform: translateY(0) rotateX(0deg);
        opacity: 1;
    }
`;

const spinDown = keyframes`
    0% {
        transform: translateY(-100%) rotateX(90deg);
        opacity: 0;
    }
    50% {
        transform: translateY(-20%) rotateX(20deg);
        opacity: 0.7;
    }
    100% {
        transform: translateY(0) rotateX(0deg);
        opacity: 1;
    }
`;

export const MoveHistoryWrapper = styled.div`
    position: relative;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 12px 20px;
    min-width: 180px;
    font-size: 1rem;
    margin: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 400;
    cursor: pointer;
    perspective: 200px;

    &:hover {
        box-shadow: 0px 0px 10px ${(props) => props.theme.colors.purple};
    }

    /* responsive design */
    @media (min-width: 2560px) {
        padding: 16px 28px;
        min-width: 240px;
        font-size: 1.4rem;
        margin: 28px;
        border-radius: 14px;
    }
    @media (max-width: 768px) {
        padding: 10px 16px;
        min-width: 150px;
        font-size: 0.9rem;
        margin: 10px;
    }
    @media (max-width: 480px) {
        padding: 8px 14px;
        min-width: 130px;
        font-size: 0.8rem;
        margin: 8px;
        border-radius: 8px;
    }
    @media (max-width: 359px) {
        padding: 7px 10px;
        min-width: 110px;
        font-size: 0.7rem;
        margin: 6px;
        border-radius: 6px;
    }
`;

export const SlotWindow = styled.div`
    height: 1.4em;
    overflow: hidden;
    position: relative;
    perspective: 200px;
`;

export const SlotItem = styled.div`
    animation: ${(props) =>
        props.$direction === "up"
            ? spinUp
            : props.$direction === "down"
            ? spinDown
            : "none"
    } 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    text-align: center;
    line-height: 1.4em;
`;

export const HistoryDropdown = styled.div`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
    box-shadow: 0px 4px 16px ${(props) => props.theme.colors.black};
    z-index: 100;
    max-height: 220px;
    overflow-y: auto;
    padding: 6px;

    /* responsive design */
    @media (min-width: 2560px) {
        max-height: 320px;
        padding: 10px;
        border-radius: 14px;
    }
    @media (max-width: 480px) {
        max-height: 160px;
        padding: 4px;
        border-radius: 6px;
    }
    @media (max-width: 359px) {
        max-height: 130px;
    }
`;

export const HistoryItem = styled.div`
    padding: 10px 14px;
    margin: 4px 0;
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: all 0.2s ease;
    transform: scale(1);
    user-select: none;

    &:hover {
        border-color: ${(props) => props.theme.colors.purple};
        box-shadow: 0px 0px 10px ${(props) => props.theme.colors.purple};
    }

    &:active {
        transform: scale(0.95);
        background-color: ${(props) => props.theme.colors.purple};
        color: ${(props) => props.theme.colors.white};
    }

    /* responsive design */
    @media (min-width: 2560px) {
        padding: 14px 18px;
        font-size: 1.1rem;
    }
    @media (max-width: 480px) {
        padding: 8px 10px;
        font-size: 0.75rem;
    }
    @media (max-width: 359px) {
        padding: 6px 8px;
        font-size: 0.7rem;
    }
`;
