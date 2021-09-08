import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { ChartDiv } from "./chart-div";

// 城乡网民结构

export const Chart6 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let option = createEchartOption({
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
        option && myChart.setOption(option);
    },[])
    return (
            <ChartDiv title="城乡网民结构">
                <div ref={chartDiv} style={{ height: '100%', width:'100%'}}></div>
            </ChartDiv>
    )
}