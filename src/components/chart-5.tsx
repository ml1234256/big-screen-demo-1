import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { ChartDiv } from "./chart-div";

// 城乡地区互联网普及率

export const Chart5 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let options = createEchartOption({
            legend: {
                data: ['农村', '城镇'],
            },
            tooltip: {},
            xAxis: {
                data: ['2016.12', '2017.12', '2018.12', '2020.3', '2020.12'],
                axisTick: { show: false },
                axisLabel: {
                    fontSize: 6
                },
            },
            yAxis: {
                show: true,
            },
            series: [
                {
                    name: '城镇',
                    type: 'line',
                    color: '#EE6666',
                    data: [69.1, 71.0, 74.8, 76.5, 79.8],
                },
                {
                    name: '农村',
                    type: 'line',
                    color: '#5470C6',
                    data: [33.1, 35.4, 38.4, 46.2, 55.9],
                }
            ]
        });
        options && myChart.setOption(options);
    },[])
    return (
        <ChartDiv title="城乡地区互联网普及率">
            <div ref={chartDiv} style={{ height: '100%', width:'100%'}}></div>
        </ChartDiv>
    )
}