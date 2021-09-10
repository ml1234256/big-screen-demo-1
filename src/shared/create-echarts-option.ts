import { baseEchartOption } from './base-echart-option';
import { px } from "./px";

export const createEchartOption = (option: any) => {
    const createOption = {
        ...baseEchartOption,
        ...option,
    }
    if (!(option?.xAxis?.axisLabel?.fontSize)) {
        createOption.xAxis = createOption.xAxis || {};
        createOption.xAxis.axisLabel = createOption.xAxis.axisLabel || {};
        createOption.xAxis.axisLabel.fontSize = px(12);
    }
    if (!(option?.yAxis?.axisLabel?.fontSize)) {
        createOption.yAxis = createOption.yAxis || {};
        createOption.yAxis.axisLabel = createOption.yAxis.axisLabel || {};
        createOption.yAxis.axisLabel.fontSize = px(12);
    }
    return createOption
}
