import React from "react";
import './home.scss';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';

export const Home = () => {

    return (
        <div className="home">
            <header><h1>中国互联网络发展状况统计</h1></header>
            <main> 
                <section className="section-1">
                    <div className="chart chart-11">
                       <Chart1 />
                    </div>
                    <div className="chart chart-12">
                        <Chart4 />
                    </div>
                    <div className="chart chart-13">
                        <Chart2 />
                    </div>
                </section>
                <section className="section-2">
                    <div className="chart-21"></div>
                    <div className="chart-22">
                        <Chart7 />                    </div>
                    <div className="chart-23"></div>
                </section>
                <section className="section-3">
                    <div className="chart chart-31">
                        <Chart6 />
                    </div>
                    <div className="chart chart-32">
                        <Chart5 />
                    </div>
                    <div className="chart chart-33">
                        <Chart3 />
                    </div>
                </section>
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
}

