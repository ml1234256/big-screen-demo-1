import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';

// 互联网接入设备使用情况

const ChartWrapper = styled.div`
    width:100%;
    max-height:100%;
    color: #fff;
    border: 1px solid #fff;
    font-size:6px;
`;

export const Chart3 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let options = {
            title: {
                text: '互联网接入设备使用情况'
            },
            tooltip: {},
            xAxis: {
                data: ['台式电脑', '笔记本电脑', '手机', '电视', "平板电脑"],
                axisTick: { show: false },
                axisLabel: {
                    fontSize:6
                },
            },
            yAxis: {},
            series: [
                {
                    name:'2020.3',
                    type: 'bar',  // color: 'red',
                    data: [42.7, 35.1, 99.3, 32.0, 29.0]
                },
                    {
                    name:'2020.12',
                    type: 'bar',  // color: 'red',
                    data: [32.8, 28.2, 99.7, 24.0, 22.9]
                }
            ]
        };

        options && myChart.setOption(options);
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