import { px2rem } from "./px2rem";

export const createEchartOption = (option: any) => {
    const createOption = {
        textStyle: {
            fontSize: px2rem(12),
            color: '#79839E'
        },
        title: { show: false },
        legend: { show: false },
        grid: {
            left: '15%',
            top: '25%',
            right: '10%',
            bottom: '16%'
        },
        ...option,
    }
    return createOption;
}