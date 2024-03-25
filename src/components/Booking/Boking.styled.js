import styled from "styled-components";
import { Form, Field} from 'formik';

export const  BokingWrap = styled.div`
    width: 50%;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 24px;
`

export const BokingTitle = styled.h2`
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: var(--main);
    margin-bottom: 8px;
`

export const BokingText = styled.p`
    margin-bottom: 24px;
`

export const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const FieldStyle = styled(Field)`
    padding: 18px;
    color: var(--main);
    background: var(--inputs);
    border-radius: 10px;
    border: none;

    &::placeholder {
        color: rgba(16, 24, 40, 0.6);
    }
`

export const Textarea = styled(Field)`
    border-radius: 10px;
    padding: 18px;
    width: 400px;
    height: 114px;
    resize: none;
    background: var(--inputs);
    border: none;
`
