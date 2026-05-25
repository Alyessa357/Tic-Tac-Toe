import styled from "styled-components";

export const GameBoardStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding-bottom: 12px;

    /* responsive design */
    @media (min-width: 2560px) {
        gap: 2.5rem;
        padding-bottom: 16px;
    }
    @media (max-width: 768px) {
        gap: 1rem;
        padding-bottom: 8px;
    }
    @media (max-width: 480px) {
        gap: 0.6rem;
        padding-bottom: 6px;
    }
    @media (max-width: 359px) {
        gap: 0.4rem;
        padding-bottom: 4px;
    }
`

export const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    gap: 0.5rem;
    padding-top: 2vh;
    

    /* responsive design */
    @media (min-width: 2560px) {
        padding-top: 3vh;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        padding-top: 1.5vh;
        gap: 0.3rem;
    }

    @media (max-width: 480px) {
        padding-top: 1vh;
        gap: 0.2rem;
    }

    @media (max-width: 359px) {
        padding-top: 0.5vh;
        gap: 0.1rem;
    }
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    button {
        min-width: 180px;
        font-size: 1rem;
        padding: 12px 20px;
    }

    /* responsive design */
    @media (min-width: 2560px) {
        gap: 1.5rem;
        button {
            min-width: 240px;
            font-size: 1.4rem;
            padding: 16px 28px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.25rem;
        button {
            min-width: 150px;
            font-size: 0.9rem;
            padding: 10px 16px;
        }
    }
    @media (max-width: 480px) {
        button {
            min-width: 130px;
            font-size: 0.8rem;
            padding: 8px 14px;
        }
    }
    @media (max-width: 359px) {
        button {
            min-width: 110px;
            font-size: 0.7rem;
            padding: 7px 10px;
        }
    }
`;