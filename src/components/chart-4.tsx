import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { px2rem } from "../shared/px2rem";
import { ChartDiv } from "./chart-div";

// 网民学历结构与个人月收入

const ChartDiva = styled.div`
    height:100%;
    width: 100%;
    /* border:1px solid #fff; */
`;

export const Chart4 = () => {
    const chartDiv1 = useRef<HTMLDivElement>(null);
    const chartDiv2 = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart1 = echarts.init((chartDiv1 as any).current);
        const myChart2 = echarts.init((chartDiv2 as any).current);
        const option1 = createEchartOption({
             xAxis: {show: false},
                yAxis: {show: false},
                series: [{
                    type: 'pie',
                    radius: ['0%', '50%'],
                    avoidLabelOverlap: false, 
                    data: [
                        { value:19.3, name: "小学及以下" },
                        { value: 40.3, name: "初中" },
                        { value: 20.6, name: "高中/中专、技校" },
                        { value: 10.5, name: "大学/专科" },
                        { value: 9.8, name: "本科及以上" }
                    ],
                    label: {
                        show: false
                    }
                }]
        });
        const option2 = createEchartOption({
            grid: {
                top: '10%',
                left: '26%',
                bottom: '15%'
            },
             xAxis: {
                axisTick: { show: false },
                axisLine: {
                        show:true
                },
                splitLine: {
                        show: false
                    },
                axisLabel: {
                    fontSize: px2rem(12)
                },
            },
            yAxis: {
                    axisTick: { show: false },
                    axisLine: {
                        show:true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        fontSize:px2rem(12)
                    },
                    data:['8k以上', '5k-8k', '3k-5k', '1.5k-3k', '1k-1.5k', '0.5k-1k', '0.5k以下', '无收入']
                },
                series: [{
                    type: 'bar',  // color: 'red',
                    data: [14.8, 14.5, 19.6, 19.4, 5.6, 5.7, 9.6, 10.8],
                    barWidth: 6,
                    itemStyle: {
                        borderRadius:[0, 3, 3, 0]
                    }
                }]
        });
        option1 && myChart1.setOption(option1);
        option2 && myChart2.setOption(option2)
    },[])
    return (
        <ChartDiv title='网民学历结构与个人月收入'>
            <ChartDiva ref={chartDiv2}></ChartDiva>
            <ChartDiva ref={chartDiv1}></ChartDiva>
        </ChartDiv>
    )
}