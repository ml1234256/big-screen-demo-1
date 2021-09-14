
import styled from 'styled-components';

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    max-height:100%;
    /* border:1px solid #fff; */
`;
const Title = styled.h2`
    color: #fff;
    text-align: center;
`;
const Content = styled.div`
    width: 100%;
    /* border:1px solid #fff; */
    display: flex;
    flex-grow: 1;
    position: relative;
`;

export const ChartDiv = (props:any) => {
    
    return (
        <ChartWrapper>
            <Title className="title">{ props.title }</Title>
            <Content style={{display:'flex', height:'100%'}}>
                {props.children}
            </Content>
        </ChartWrapper>
    )
}