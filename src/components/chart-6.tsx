import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";

// 城乡网民结构
const ChartWrapper = styled.div`
    width:100%;
    height:100%;
    max-height:100%;;
    color: #fff;
    border: 1px solid #fff;
    font-size:6px;
`;

export const Chart6 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let options = createEchartOption({
            // title: {
            //     text: '城乡网民结构'
            // },
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
                    barWidth: '10',
                },
                {
                    name: '城镇',
                    type: 'bar',
                    barGap: '-100%', //设置多柱子重叠
                    color: '#5470C6',
                    data: [71.8, 68.7],
                    barWidth: '10',
                }
            ]
        });
        options && myChart.setOption(options);
    },[])
    return (
        <ChartWrapper>
            <div ref={chartDiv}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            ></div>
        </ChartWrapper>
    )
}