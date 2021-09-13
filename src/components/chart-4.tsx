import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { px } from "../shared/px";
import { ChartDiv } from "./chart-div";

// 网民个人月收入

const ChartDiva = styled.div`
    height:100%;
    width: 100%;
    /* border:1px solid #fff; */
`;

export const Chart4 = () => {
    //const chartDiv1 = useRef<HTMLDivElement>(null);
    const chartDiv2 = useRef<HTMLDivElement>(null);
    useEffect(() => {
        //const myChart1 = echarts.init((chartDiv1 as any).current);
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
                left: '18%',
                bottom: '10%'
            },
             xAxis: {
                axisTick: { show: false },
                axisLine: {
                        show:false
                 },
                axisLabel:{show:false},
                splitLine: {
                        show: false
                    },
            },
            yAxis: {
                    axisTick: { show: false },
                    axisLine: {
                        show:false
                    },
                    splitLine: {
                        show: false
                    },
                    data:['8k以上', '5k-8k', '3k-5k', '2k-3k', '1k-2k',  '1k以下', '无收入']
                },
                series: [
                {
                    type: 'bar',  // color: 'red',
                    data: [25, 25, 25, 25, 25, 25, 25],
                    barWidth: px(6),
                    itemStyle: {
                        borderRadius: [0, px(3), px(3), 0],
                        color:"rgba(84,112,198, 0.3)",
                        },
                    
                },
                {
                    type: 'bar',  // color: 'red',
                    data: [14.8, 14.5, 19.6, 13.0, 12.0, 15.3, 10.8],
                    barWidth: px(6),
                    itemStyle: {
                        borderRadius:[0, px(3), px(3), 0]
                        },
                    //showBackground:true
                    barGap: '-100%',
                }]
        });
        //option1 && myChart1.setOption(option1);
        option2 && myChart2.setOption(option2)
    },[])
    return (
        <ChartDiv title='网民个人月收入'>
            <ChartDiva ref={chartDiv2}></ChartDiva>
            {/* <ChartDiva ref={chartDiv1}></ChartDiva> */}
        </ChartDiv>
    )
}