import React from "react";
import './home.scss';


export const Home = () => {
    return (
        <div className="home">
            <header><h1>中国互联网络发展状况统计</h1></header>
            <main> 
                <section className="section-1">
                    <div className="chart chart-11"></div>
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