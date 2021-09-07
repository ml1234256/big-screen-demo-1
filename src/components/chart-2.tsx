import { useEffect, useRef } from "react";
import styled from 'styled-components';

// 网页数量

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
const Table = styled.table`
  height: 100%;
  width: 100%;
  table-layout: fixed;
  border-collapse:collapse;
  border: 1px solid #fff;
  color:#fff;
  th, td{
      border: 1px solid #fff;
      padding:0;
      font-size: 10px;
      text-align: center;
  }
`;

export const Chart2 = () => {
    return (
        <ChartWrapper>
            <Title>网页数量表格</Title>
            <Table>
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
            </Table>
        </ChartWrapper>
       
    )
}