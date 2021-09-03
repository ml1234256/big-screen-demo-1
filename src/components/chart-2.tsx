import { useEffect, useRef } from "react";
import styled from 'styled-components';

// 网页数量

const Table = styled.div`
    display: grid;
    width:100%;
    max-height:100%;
    color: #fff;
    border: 1px solid #fff;
    font-size:6px;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
`;

export const Chart2 = () => {
    return (
        <Table>
           网页数量表格
        </Table>
    )
}