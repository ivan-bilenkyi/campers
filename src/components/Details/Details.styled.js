import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`
export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    padding: 12px 18px;
    background: var(--block-features);
    
    & span {
        font-weight: 500;
        font-size: 16px;
        line-height: 125%;
        color: var(--main);
    }
`;