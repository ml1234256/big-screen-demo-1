import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { px } from "../shared/px";
import { ChartDiv } from "./chart-div";

// 互联网上市企业类型分布

const ChartDiva = styled.div`
    height:100%;
    width: 100%;
    /* border:1px solid #fff; */
`;

export const Chart4 = () => {
    const chartDiv2 = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart2 = echarts.init((chartDiv2 as any).current);
        const option2 = createEchartOption({
            grid: {
                top: '10%',
                left: '20%',
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
                    data:['其他', '电子商务', '网络金融', '工具软件',  '网络媒体', '网络游戏','文化娱乐']
                },
                series: [
                {
                    type: 'bar',  // color: 'red',
                    data: [30, 30, 30, 30, 30, 30, 30],
                    barWidth: px(6),
                    itemStyle: {
                        borderRadius: [0, px(3), px(3), 0],
                        color:"rgba(84,112,198, 0.3)",
                    },
                    
                },
                {
                    type: 'bar',  // color: 'red',
                    data: [23.0, 12.6, 10.5, 7.7, 5.6, 24.5, 16.1],
                    barWidth: px(6),
                    itemStyle: {
                        borderRadius:[0, px(3), px(3), 0]
                        },
                    // showBackground:true,
                    label: {
                        show: true,
                        position: 'outside',
                        textStyle: { color: 'white', fontSize: px(8) },
                        formatter(options:any) {
                            return options.value + '%';
                        }
                    },
                    barGap: '-100%',
                }]
        });
        //option1 && myChart1.setOption(option1);
        option2 && myChart2.setOption(option2)
    },[])
    return (
        <ChartDiv title='互联网上市企业类型分布'>
            <ChartDiva ref={chartDiv2}></ChartDiva>
        </ChartDiv>
    )
}