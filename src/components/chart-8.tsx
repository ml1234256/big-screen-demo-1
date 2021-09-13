import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOption} from '../shared/create-echarts-option';
import {px} from '../shared/px';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const Content = styled.div`
  height:100%;
  width: 100%;
  flex-grow: 1;
  position: relative;
`;
const ChartDiv = styled.div`
  height:100%;
  width: 100%;
 // border: 1px solid #fff;
`;

const ChartText = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-75%,-50%);
  color: #fff;
`;
  

export const Chart8 = () => {
  const chartDiv1 = useRef<HTMLDivElement>(null);
  const chartDiv2 = useRef<HTMLDivElement>(null);
  const chartDiv3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart1 = echarts.init((chartDiv1 as any).current);
    const myChart2 = echarts.init((chartDiv2 as any).current);
    const myChart3 = echarts.init((chartDiv3 as any).current);

    const option1 = createEchartOption({
      xAxis: { show: false },
      yAxis: { show: false },
      legend: {
        data: ['女', '男'],
        orient:'vertical',
        right: px(16),
        bottom:'center',
        itemHeight: px(6),
        itemWidth: px(6),
        textStyle: {
            color: '#fff',
            fontSize: px(8),
        }
      },
      series: [{
        name:'性别结构',
        type: 'pie',
        radius: ['40%', '50%'],
        center:['45%', '50%'],
        avoidLabelOverlap: false,
        data: [
          { value: 49.0, name: "女" },
          { value: 51.0, name: "男" },
        ],
        label: {
          show: true,
          position: 'outside',
          textStyle: { color: 'white', fontSize: px(8) },
          formatter(options:any) {
            return options.value + '%';
          }
        },
        labelLine: {show: false, length:0,length2:0},
      }]
    });

    const option2 = createEchartOption({
      xAxis: { show: false },
      yAxis: { show: false },
   
      legend: {
        data: ['0-19', '20-29', '30-39', '40-59', '>=60'],
        orient:'vertical',
        right: px(6),
        bottom:px(24),
        itemHeight: px(6),
        itemWidth: px(6),
        textStyle: {
          color: '#fff',
          fontSize: px(8),
        }
      },
      series: [{
        name:'年龄结构',
        type: 'pie',
        radius: ['40%', '50%'],
        center:['45%', '50%'],
        avoidLabelOverlap: false,
        data: [
          { value: 16.6, name: "0-19" },
          { value: 17.8, name: "20-29" },
          { value: 20.5, name: "30-39" },
          { value: 33.9, name: "40-59" },
          { value: 11.2, name: ">=60" },
        ],
          label: {
          show: true,
          position: 'outside',
          textStyle: { color: 'white', fontSize: px(8) },
          formatter(options:any) {
            return options.value + '%';
          }
        },
        labelLine: {show: false, length:0,length2:0},
      }]
    });
    const option3 = createEchartOption({
      xAxis: { show: false },
      yAxis: { show: false },
      legend: {
        data: ['<=1k', '1k-3k',  '3k-5k', '5k-8k', '>=8k'],
        orient:'vertical',
        right: px(6),
        bottom: px(24),
        itemHeight: px(6),
        itemWidth: px(6),
        textStyle: {
          color: '#fff',
          fontSize: px(8),
        }
      },
      series: [{
        name:'收入结构',
        type: 'pie',
        radius: ['40%', '50%'],
        center:['45%', '50%'],
        avoidLabelOverlap: false,
        data: [
          { value: 26.1, name: "<=1k" },
          { value: 25.0, name: "1k-3k" },
          { value: 19.6, name: "3k-5k" },
          { value: 14.5, name: "5k-8k" },
          { value: 14.8, name: ">=8k" },
        ],
        label: {
          show: true,
          position: 'outside',
          textStyle: { color: 'white', fontSize: px(8) },
          formatter(options:any) {
            return options.value + '%';
          }
        },
        labelLine: {show: false, length:0,length2:0},
      }]
    });
    option1 && myChart1.setOption(option1);
    option2 && myChart2.setOption(option2);
    option3 && myChart3.setOption(option3);
  }, [])
  return (
    <ChartWrapper className='chart-8'>
      <Content>
        <ChartDiv ref={chartDiv1} />
        <ChartText className='text'>性别</ChartText>
      </Content>
      <Content>
        <ChartDiv ref={chartDiv2} />
        <ChartText className='text'>年龄</ChartText>
      </Content>
      <Content>
        <ChartDiv ref={chartDiv3} />
        <ChartText className='text'>收入</ChartText>
      </Content>
    </ChartWrapper>
  );
};
