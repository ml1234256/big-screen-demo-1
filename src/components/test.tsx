import styled from 'styled-components';

const DivInner = styled.div`
    border-top: 9vh solid #071d2c;
    border-left: 2vw solid transparent;
    border-right: 2vw solid transparent;
    height: 0;
    width: 25vw;
    position: relative;
    display: flex;
    justify-content: center;
    >span {
        display: block;
        border-top: 9vh solid #061019;
        border-left: 2vw solid transparent;
        border-right: 2vw solid transparent;
        height: 0;
        width: 24.9vw;
        position: absolute;
        top: -9.8vh;
    }
`
 

export const Test = () => {
    return (
            <div className="bg"><span></span></div>
    )
}