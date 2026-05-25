import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    /* responsive design */
    @media (max-width: 480px) {
        padding: 1rem;
    }
    @media (max-width: 359px) {
        padding: 0.5rem;
    }
`;

export const ModalContainer = styled.div`
    min-width: 400px;
    margin: 0 auto;
    padding: 40px 20px;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.secondary};

    /* responsive design */
    @media (min-width: 2560px) {
        min-width: 600px;
        padding: 60px 40px;
        border-radius: 16px;
    }
    @media (max-width: 768px) {
        min-width: 320px;
        padding: 30px 16px;
    }
    @media (max-width: 480px) {
        min-width: unset;
        width: 90vw;
        padding: 24px 14px;
        border-radius: 8px;
    }
    @media (max-width: 359px) {
        width: 95vw;
        padding: 18px 10px;
        border-radius: 6px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;

    /* responsive design */
    @media (min-width: 2560px) {
        margin: 1.5rem;
    }
    @media (max-width: 480px) {
        margin: 0.5rem;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;

    /* responsive design */
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;