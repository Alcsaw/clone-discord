import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CD;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--primary);
    padding: 0 4px;
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 0;
    max-height: calc(100vh - 48px - 68px);

    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        /*background-color: var(--primary);*/
        background-color: var(--secondary);
        border-radius: 4px;
    }

    /* For Firefox */
    scrollbar-width: thin;
    scrollbar-color: var(--tertiary) var(--primary);
    /* Duas cores válidas.
    O primeiro valor aplica-se ao Thumb, o segundo ao Track */
`;

export const InputWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;

    border-radius: 7px;
    color: var(--white);
    background-color: var(--chat-input);

    position: relative;
    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: -50%;
        top: -34px; /* For Firefox... -50% doesn't always work */
        left: 14px;
        transition: 180ms ease-in-out;
    }
`;

export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;

    color: var(--gray);
`;
