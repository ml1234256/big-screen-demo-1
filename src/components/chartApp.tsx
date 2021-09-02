import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  display: flex;
  height: 100%;
`;


export const ChartApp:React.FC = () => {
        const chartDiv = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const myChart = echarts.init((chartDiv as any).current);
            let options = {
            title: {
                text: 'App 在架数量'
            },
            tooltip: {},
            xAxis: {
                data: ['2017', '2018', '2019', '2020'],
                axisTick: {show: false},
                axisLabel: {
                formatter(val: any) {
                    if (val.length > 2) {
                    const array = val.split('');
                    array.splice(2, 0, '\n');
                    return array.join('');
                    } else {
                    return val;
                    }
                }
        },
            },
            yAxis: {},
            series: [{
                type: 'bar',  // color: 'red',
                data: [402, 456, 367, 345]
            }]
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
