import {TableStyle, TdEnd} from "./Table.styled.js";

export const Table = ({info}) => {
    return (
        <TableStyle>
            <tbody>
            <tr>
                <td>Form</td>
                <TdEnd>{info.form}</TdEnd>
            </tr>
            <tr>
                <td>Length</td>
                <TdEnd>{info.length}</TdEnd>
            </tr>
            <tr>
                <td>Width</td>
                <TdEnd>{info.width}</TdEnd>
            </tr>
            <tr>
                <td>Height</td>
                <TdEnd>{info.height}</TdEnd>
            </tr>
            <tr>
                <td>Tank</td>
                <TdEnd>{info.tank}</TdEnd>
            </tr>
            <tr>
                <td>Consumption</td>
                <TdEnd>{info.consumption}</TdEnd>
            </tr>
            </tbody>
        </TableStyle>
    )
}