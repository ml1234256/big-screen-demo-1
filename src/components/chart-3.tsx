import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { px2rem } from "../shared/px2rem";

// 互联网接入设备使用情况

const ChartWrapper = styled.div`
    height:100%;
    max-height:100%;
    color: #fff;
    border: 1px solid #fff;
    font-size:6px;
`;

export const Chart3 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let option = createEchartOption({
            tooltip: {},
            legend: {
                data: ['2020.3', '2020.12'],
            },
            xAxis: {
                data: ['台式电脑', '笔记本电脑', '手机', '电视', "平板电脑"],
                axisTick: { show: false },
                axisLabel: {
                    fontSize: 12
                },
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisLine: {
                        show:true
                    },
            },
            series: [
                {
                    name:'2020.3',
                    type: 'bar',  // color: 'red',
                    data: [42.7, 35.1, 99.3, 32.0, 29.0],
                    barWidth: 6,
                    itemStyle: {
                        borderRadius: [3, 3, 0, 0]
                    }
                },
                    {
                    name:'2020.12',
                    type: 'bar',  // color: 'red',
                    data: [32.8, 28.2, 99.7, 24.0, 22.9],
                    barWidth: 6,
                    barGap: '50%',
                    itemStyle: {
                        borderRadius: [3, 3, 0, 0]
                    }
                }
            ]
        });

        option && myChart.setOption(option);
    }, [])
    return (
        <ChartWrapper>
            <div ref={chartDiv}
                style={{
                width: "100%",
                height: "100%",
            }}></div>
        </ChartWrapper>
    )
}