import { useEffect, useRef } from "react";
import styled from 'styled-components';

// 互联网接入设备使用情况

const ChartWrapper = styled.div`
    width:100%;
    max-height:100%;
    color: #fff;
    border: 1px solid #fff;
    font-size:6px;
`;

export const Chart3 = () => {
    return (
        <ChartWrapper>
           互联网接入设备使用情况
        </ChartWrapper>
    )
}