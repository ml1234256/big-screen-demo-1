import { useEffect, useRef } from "react";
import styled from 'styled-components';
import { toEditorSettings } from "typescript";

// 网页数量

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    max-height:100%;
    border:1px solid #fff;
`;
const Title = styled.h2`
    color: #fff;
    text-align: center;
`;
const Table = styled.div`
    display: grid;
    height:100%;
    max-height:100%;
    color: #fff;
    border: 1px solid #fff;
    font-size:6px;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
`;

export const Chart2 = () => {
    return (
        <ChartWrapper>
            <Title>网页数量表格</Title>
            <Table>
           
            </Table>
        </ChartWrapper>
       
    )
}