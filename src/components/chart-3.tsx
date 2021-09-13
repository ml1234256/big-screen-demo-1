import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { ChartDiv } from "./chart-div";
import { px } from "../shared/px";


// 互联网接入设备使用情况

export const Chart3 = () => {
    const chartDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init((chartDiv as any).current);
        let option = createEchartOption({
            tooltip: {},
            legend: {
                data: ['2020.3', '2020.12'],
                bottom: px(2),
                itemHeight: px(6),
                itemWidth: px(12),
                textStyle: {
                    color: '#fff',
                    fontSize: px(8),
                }
            },
            grid: {
                left: '10%',
                top: '10%',
                right: '10%',
                bottom: '30%'
            },
            xAxis: {
                data: ['台式电脑', '笔记本电脑', '手机', '电视', "平板电脑"],
                axisTick: { show: false },
                axisLabel: {
                formatter(val:string) {
                    if (val.length > 2) {
                    const array = val.split('');
                    array.splice(2, 0, '\n');
                    return array.join('');
                    } else {
                    return val;
                    }
                }
        }
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
                    barWidth: px(6),
                    itemStyle: {
                        borderRadius: [px(3), px(3), 0, 0]
                    }
                },
                    {
                    name:'2020.12',
                    type: 'bar',  // color: 'red',
                    data: [32.8, 28.2, 99.7, 24.0, 22.9],
                    barWidth: px(6),
                    barGap: '50%',
                    itemStyle: {
                        borderRadius: [px(3), px(3), 0, 0]
                    }
                }
            ]
        });

        option && myChart.setOption(option);
    }, [])
    return (
        <ChartDiv title='互联网接入设备使用情况'>
            <div ref={chartDiv} style={{ height: '100%', width: '100%' }}></div>
        </ChartDiv>
    )
}