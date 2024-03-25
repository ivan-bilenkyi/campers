import styled from "styled-components";

export const ModalInner = styled.div`
    width: 100%;
    height: 100%;
    padding-right: 16px;
    overflow: auto;
    position: relative;
`

export const Title = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: var(--main);
    margin-bottom: 10px;
`

export const ItemInfo = styled.div`
    display: flex;
    gap: 16px;
    color: var(--main);
    margin-bottom: 16px;

    & > div {
        display: flex;
        gap: 4px;
        align-items: center;
    }
`;

export const Price = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: var(--main);
    margin-bottom: 24px;
`
export const ImgWrapp = styled.ul`
    display: flex;
    gap: 16px;
    overflow: hidden;
    margin-bottom: 24px;
`
export const Img = styled.img`
    border-radius: 10px;
    max-width: 290px;
    width: 100%;
    height: 310px;
    overflow: hidden;
    object-fit: cover;
`

export const ItemText = styled.p`
    margin-bottom: 44px;
`

export const ItemListWrapp = styled.div`
    display: flex;
    flex-direction: column;
    
    &:after {
        content: "";
        width: 100%;
        border-bottom: 1px solid rgba(16, 24, 40, 0.2);
        margin-bottom: 44px;
    }
`
export const ItemList = styled.ul`
    display: flex;
    gap: 40px;
    margin-bottom: 24px;
`

export const Item = styled.li`
    position: relative;
`

export const ItemBtn = styled.button`
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: var(--main);
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;

    &.active:after {
        content: "";
        position: absolute;
        bottom: -26px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 4px;
        background-color: rgb(239, 137, 100);
        border-radius: 2px;
    }
`

export const CloseModalBtn = styled.button`
    top: 0;
    right: 16px;
    position: absolute;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    cursor: pointer;
`

export const Container = styled.div`
    display: flex;
    gap: 24px;
`