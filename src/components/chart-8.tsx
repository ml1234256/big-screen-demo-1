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
  //border: 1px solid #fff;
`;

const ChartText = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);

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
      series: [{
         name:'性别结构',
        type: 'pie',
        radius: ['50%', '60%'],
        avoidLabelOverlap: false,
        data: [
          { value: 49.0, name: "女" },
          { value: 51.0, name: "男" },
        ],
        label: {
          show: false
        }
      }]
    });

    const option2 = createEchartOption({
      xAxis: { show: false },
      yAxis: { show: false },
      series: [{
        name:'年龄结构',
        type: 'pie',
        radius: ['50%', '60%'],
        avoidLabelOverlap: false,
        data: [
          { value: 16.6, name: "0-19" },
          { value: 17.8, name: "20-29" },
          { value: 20.5, name: "30-39" },
          { value: 18.8, name: "40-49" },
          { value: 15.1, name: "50-59" },
          { value: 11.2, name: ">=60" },
        ],
        label: {
          show: false
        }
      }]
    });
    const option3 = createEchartOption({
      xAxis: { show: false },
      yAxis: { show: false },
      series: [{
        name:'收入结构',
        type: 'pie',
        radius: ['50%', '60%'],
        avoidLabelOverlap: false,
        data: [
          { value: 26.1, name: "<=1k" },
          { value: 12.0, name: "1k-2k" },
          { value: 13.0, name: "2k-3k" },
          { value: 19.6, name: "3k-5k" },
          { value: 14.5, name: "5k-8k" },
          { value: 14.8, name: ">=86" },
        ],
        label: {
          show: false
        }
      }]
    });
    option1 && myChart1.setOption(option1);
    option1 && myChart2.setOption(option2);
    option1 && myChart3.setOption(option3);
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
