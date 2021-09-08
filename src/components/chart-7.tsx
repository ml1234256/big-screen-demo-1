import { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as echarts from 'echarts';
import { createEchartOption } from "../shared/create-echarts-option";

// 城乡网民结构
const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    max-height:100%;
    border:1px solid #fff;
`;
const Title = styled.h2`
    color: #fff;
    text-align: center;
`;
const ChartDiv = styled.div`
    height:100%;
    width: 100%;
    border:1px solid #fff;
`;

export const Chart7 = () => {
    const china = require('../geo/china.json');
    const chartDiv = useRef(null);
    const colors = {'北京市': '#BB31F7', '浙江省': '#15B8FD', '广东省': '#06E1EE'};
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
            ]
        });
        option && myChart.setOption(option);
    }, []);
    return (
        <ChartWrapper>
            <Title>网页数量热点区域</Title>
            <ChartDiv ref={chartDiv}></ChartDiv>
        </ChartWrapper>
    )
}