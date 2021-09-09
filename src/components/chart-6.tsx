import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { ChartDiv } from "./chart-div";
import { px2rem } from "../shared/px2rem";

// 网站数量

export const Chart6 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let option = createEchartOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014','2015', '2016', '2017', '2018', '2019', '2020'],
                splitLine: { show: true, lineStyle: { color: '#0A3149' } },
                axisTick: {show: false},
                axisLine: {show: false},
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: { color: '#09293D' }
                },
            },
            series: [{
                type: 'line',
                data: [335, 425, 482,533,523, 497,443],
                symbol: 'circle',
                symbolSize: px2rem(12),
                lineStyle: {width: px2rem(2)},
                areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#414a9f'
                }, {
                    offset: 1,
                    color: '#1b1d52'
                }]),
                }
            }]
        });
        option && myChart.setOption(option);
    },[])
    return (
            <ChartDiv title="网站数量">
                <div ref={chartDiv} style={{ height: '100%', width:'100%'}}></div>
            </ChartDiv>
    )
}