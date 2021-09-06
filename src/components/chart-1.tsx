import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import styled from 'styled-components';
import { px2rem } from "../shared/px2rem";
import { createEchartOption } from "../shared/create-echarts-option";

// App 在架数量与分类占比

const ChartWrapper = styled.div`
  display: flex;
     height:100%;
    max-height:100%;
`;


export const Chart1 = () => {
    const chartDiv1 = useRef<HTMLDivElement>(null);
    const chartDiv2 = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const myChart1 = echarts.init((chartDiv1 as any).current);
            const myChart2 = echarts.init((chartDiv2 as any).current);
            let options1 = {
                xAxis: {show: false},
                yAxis: {show: false},
                legend: {show: false},
                series: [{
                    type: 'pie',
                    radius: ['35%', '50%'],
                    avoidLabelOverlap: false, 
                    data: [
                        { value: 25.7, name: "游戏" },
                        { value: 14.6, name: "日常工具" },
                        { value: 9.9, name: "电子商务" },
                        { value: 9.0, name: "生活服务" },
                        { value:40.8, name: "其他" }
                    ]
                }]
            };
            let options2 = createEchartOption({
               
                xAxis: {
                    data: ['2017', '2018', '2019', '2020'],
                    axisTick: { show: false },
                    axisLabel: {
                        fontSize: px2rem(12),
                    },
                },
                yAxis: {
                    axisLine: {
                        show:true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: px2rem(12),
                    }
                },
               
                series: [{
                    type: 'bar',  // color: 'red',
                    data: [402, 456, 367, 345],
                    barWidth: 10
                }]
            });
            options1 && myChart1.setOption(options1);
            options2 && myChart2.setOption(options2);
            }, [])
    return (
        <ChartWrapper>
             <div ref={chartDiv1}
                style={{
                width: "100%",
                height: "100%",
            }}></div>
            <div ref={chartDiv2}
                style={{
                width: "100%",
                height: "100%",
            }}></div>
        </ChartWrapper>
        )
}
