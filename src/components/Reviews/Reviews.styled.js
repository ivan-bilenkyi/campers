import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const WrappCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #F2F4F7;
    border-radius: 50%;
`
export const Circle = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: var(--button);
`

export const BoxName = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
`