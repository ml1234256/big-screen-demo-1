import React from "react";
import './home.scss';
import * as echarst from 'echarts';
import { useRef } from "react";
import { useEffect } from "react";

export const Home = () => {
    const chartApp = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log(1, chartApp, 2, chartApp.current);
            const myChart = echarst.init((chartApp as any).current);
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
    },[])
    
    return (
        <div className="home">
            <header><h1>中国互联网络发展状况统计</h1></header>
            <main> 
                <section className="section-1">
                    <div className="chart chart-11">
                        <div ref={chartApp}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            className="chart-app"></div>
                    </div>
                    <div className="chart chart-12"></div>
                    <div className="chart chart-13"></div>
                </section>
                <section className="section-2">
                    <div className="chart-21"></div>
                    <div className="chart-22"></div>
                    <div className="chart-23"></div>
                </section>
                <section className="section-3">
                    <div className="chart chart-31"></div>
                    <div className="chart chart-32"></div>
                    <div className="chart chart-33"></div>
                </section>
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
}

