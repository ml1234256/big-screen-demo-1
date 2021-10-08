import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";
import { ChartDiv } from "./chart-div";

// 网页数量热点区域

export const Chart7 = () => {
    const china = require('../geo/china.json');
    const chartDiv = useRef(null);
    const colors = {'北京市': '#f33646', '浙江省': '#c945b3', '广东省': '#ee9d06', '山东省': '#eede06', '江苏省': '#0699ee', '上海市': '#06e6ee'};
    useEffect(() => {
        // console.log(china)
        var myChart = echarts.init((chartDiv as any).current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        const option = createEchartOption({
            xAxis: { show: false },
            yAxis: { show: false },
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '北京市', value: 100 },
                    ],
                    label: { show: false, color: 'white' },
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['北京市'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
            
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '浙江省', value: 50 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['浙江省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '广东省', value: 75 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['广东省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
            
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '山东省', value: 50 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['山东省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
            
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '江苏省', value: 35 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['江苏省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
            
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '上海市', value: 20 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['上海市'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
            ]
        });
        option && myChart.setOption(option);
    }, []);
    return (
            <ChartDiv title="网页数量热点区域">
            <div ref={chartDiv} style={{ height: '100%', width: '100%' }}></div>
            <div className="geoText">中国部分地区地图</div>
            </ChartDiv>
    )
}