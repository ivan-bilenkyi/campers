import styled from 'styled-components';

export const ButtonStyle = styled.button`
    border: 1px solid rgba(71, 84, 103, 0.2);
    border-radius: 200px;
    padding: 16px 32px;
    width: 145px;
    height: 56px;
    background: transparent;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: var(--main);
    cursor: pointer;
    margin: 0 auto 50px;
    transition: border-color 0.3s ease;

    &:hover {
        border-color: var(--button); 
    }
`