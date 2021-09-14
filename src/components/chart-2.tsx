import styled from 'styled-components';
import { ChartDiv } from "./chart-div";

// 网络诈骗分类


export const Chart2 = () => {
    return (
        <ChartDiv title='网络诈骗分类'>
            <table>
                <thead>
                    <tr>
                        <th>网络诈骗分类</th>
                        <th>2020年3月</th>
                        <th>2020年12月</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>虚拟中奖信息</td>
                        <td>52.6%</td>
                        <td>47.9%</td>
                    </tr>
                    <tr>
                        <td>网络兼职</td>
                        <td>33.5%</td>
                        <td>33.3%</td>
                    </tr>
                    <tr>
                        <td>网络购物</td>
                        <td>33.0%</td>
                        <td>33.0%</td>
                    </tr>
                    <tr>
                        <td>冒充好友</td>
                        <td>41.2%</td>
                        <td>31.4%</td>
                    </tr>
                    <tr>
                        <td>钓鱼网站</td>
                        <td>28.2%</td>
                        <td>24.7%</td>
                    </tr>
                    <tr>
                        <td>虚假招工信息</td>
                        <td>23.7%</td>
                        <td>20.9%</td>
                    </tr>

                </tbody>
            </table>
        </ChartDiv>
       
    )
}