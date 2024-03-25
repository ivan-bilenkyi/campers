import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
    display: flex;
    gap: 24px;
    padding: 24px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;
`;

export const Img = styled.img`
    flex-shrink: 0;
    border-radius: 10px;
    max-width: 290px;
    width: 100%;
    height: 310px;
    overflow: hidden;
    object-fit: cover;
`
export const InfoWrapp = styled.div`
    width: 100%;
    overflow: hidden;
`

export  const Button = styled.button`
    background-color: transparent;
    border: none;
    height: 24px;
    padding: 0;
    margin-left: 10px;
    cursor: pointer;
`
export const UseFavorite = styled.use`
    fill: none;
    stroke: var(--main);
    transition: stroke 0.3s ease; /* Плавна зміна кольору */

    ${Button}:hover & {
        stroke: var(--button);
    }


    ${Button}.active:hover & {
        stroke: var(--main);
        fill: none;
    }

    ${Button}.active & {
        stroke: var(--button);
        fill: var(--button);
    }
`;

export const ItemTitleWrap = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: var(--main);
    margin-bottom: 8px;
`

export const ItemTitle = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: var(--main);
    margin-bottom: 8px;
`



export const ItemInfo = styled.div`
    display: flex;
    gap: 16px;
    color: var(--main);
    margin-bottom: 24px;

    & > div {
        display: flex;
        gap: 4px;
        align-items: center;
    }
`;

export const StyledLink = styled(Link)`
    color: var(--main);
`;

export const ItemText = styled.p`
    white-space: nowrap;
    text-overflow: ellipsis; 
    overflow: hidden;
    margin-bottom: 24px;
    color: var(--text);
`

export const ButtonModal = styled.button`
    display: inline-block;
    border: none;
    border-radius: 200px;
    padding: 16px 40px;
    height: 56px;
    background-color: var(--button);
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d84343;
    }
`