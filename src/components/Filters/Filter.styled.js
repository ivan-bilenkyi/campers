import styled from 'styled-components';
import { Field as FormikField } from "formik"

export const Aside = styled.aside`
    max-width: 365px;
    width: 100%;
`;

export const FieldLocationWrap = styled.div`
    position: relative;
    margin-bottom: 32px;
`;

export const FieldLocation = styled(FormikField)`
    border-radius: 10px;
    border: none;
    padding: 18px 18px 18px 44px;
    width: 100%;
    background: var(--inputs);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    margin-bottom: 32px;
`;

export const SvgIcon = styled.svg`
    position: absolute;
    top: 18px;
    left: 18px;
`;

export const FilterTitle = styled.p`
    font-weight: 500;
    margin-bottom: 14px;
`

export const FilterGroupTitle = styled.p`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: var(--main);

    &:after {
        content: "";
        width: 100%;
        border-bottom: 1px solid rgba(16, 24, 40, 0.2);
        margin: 24px 0;
    }
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 32px;
`

export const CheckboxWrapper = styled.label`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 95px;
    width: 115px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 17px 18px;
`;

export const Field = styled(FormikField)`
    display: none;
`;

export const SvgWrapp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
`;