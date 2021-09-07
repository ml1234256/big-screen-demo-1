import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";

// 城乡网民结构
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
const ChartDiv = styled.div`
    height:100%;
    width: 100%;
    border:1px solid #fff;
`;

export const Chart6 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let options = createEchartOption({
            legend: {
                data: ['农村', '城镇'],
            },
            
            tooltip: {},
            xAxis: {
                data: ['2020.3', '2020.12'],
                axisTick: { show: false },
                axisLabel: {
                    fontSize: 6
                },
            },
            yAxis: {},
            series: [
                {
                    name: '农村',
                    type: 'bar',
                    color: '#EE6666',
                    data: [100, 100],
                    barWidth: '6',
                    itemStyle: {
                        borderRadius: [3, 3, 0, 0]
                    }
                },
                {
                    name: '城镇',
                    type: 'bar',
                    barGap: '-100%', //设置多柱子重叠
                    color: '#5470C6',
                    data: [71.8, 68.7],
                    barWidth: '6',
                }
            ]
        });
        options && myChart.setOption(options);
    },[])
    return (
        <ChartWrapper>
            <Title>城乡网民结构</Title>
            <ChartDiv ref={chartDiv}></ChartDiv>
        </ChartWrapper>
    )
}