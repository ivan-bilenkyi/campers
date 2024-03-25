import styled from 'styled-components';

export const ButtonStyle = styled.button`
    border: none;
    border-radius: 200px;
    padding: 16px 60px;
    height: 56px;
    background-color: var(--button);
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #fff;
    cursor: pointer;
    width: fit-content;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d84343;
    }
`