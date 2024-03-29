import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import styled from 'styled-components';
import { px } from "../shared/px";
import { createEchartOption } from "../shared/create-echarts-option";
import { ChartDiv } from "./chart-div";

// App 在架数量与分类占比

const ChartDiva = styled.div`
    height:100%;
    width: 100%;
    /* border:1px solid #fff; */
    flex-grow: 1;
`

export const Chart1 = () => {
    const chartDiv1 = useRef<HTMLDivElement>(null);
    const chartDiv2 = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const myChart1 = echarts.init((chartDiv1 as any).current);
            const myChart2 = echarts.init((chartDiv2 as any).current);
            let options1 = createEchartOption({
                xAxis: {show: false},
                yAxis: { show: false },
                legend: {
                    data: ["游戏", "日常工具", "电子商务", "生活服务", "其他"],
                   // orient:'vertical',
                    right:'4%',
                    bottom: '0%',
                    itemHeight: px(6),
                    itemWidth: px(6),
                    textStyle: {
                    color: '#fff',
                    fontSize: px(8),
                    }
                },
                series: [{
                    type: 'pie',
                    radius: ['10%', '55%'],
                    center: ['46%', '50%'],
                    avoidLabelOverlap: false, 
                    data: [
                        { value: 25.7, name: "游戏" },
                        { value: 14.6, name: "日常工具" },
                        { value: 9.9, name: "电子商务" },
                        { value: 9.0, name: "生活服务" },
                        { value: 40.8, name: "其他" }
                    ],
                    label: {
                        show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(8)},
                        distanceToLabelLine: 0,
                        formatter(options:any) {
                        return options.value + '%';
                        }
                    },
                    labelLine: {show: true, length:2,length2:8},
                    roseType: 'area',
                    itemStyle: {
                        shadowBlur: px(200),
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                }]
            });
            let options2 = createEchartOption({
                xAxis: {
                    data: ['2017', '2018', '2019', '2020'],
                    axisTick: { show: false },
                },
                yAxis: {
                    axisLine: {
                        show:true
                    },
                    splitLine: {
                        show: false
                    },
                },
                 grid: {
                    left: '25%',
                    top: '25%',
                    right: '10%',
                    bottom: '16%'
                },
                series: [{
                    type: 'bar',  // color: 'red',
                    data: [402, 456, 367, 345],
                    barWidth: px(6),
                    itemStyle: {
                        borderRadius:[px(3), px(3), 0, 0]
                    }
                }]
            });
            options1 && myChart1.setOption(options1);
            options2 && myChart2.setOption(options2);
            }, [])
    return (
        <ChartDiv title='App 在架数量与分类占比'>
            <ChartDiva ref={chartDiv2} />
            <ChartDiva ref={chartDiv1} />
        </ChartDiv>
        )
}
