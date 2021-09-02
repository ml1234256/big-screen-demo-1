import React, { useRef, useEffect } from "react"
import * as echarts from 'echarts';

export default function Chart() {
  const myChart = useRef(null)
  useEffect(() => {
    const chart = echarts.init(myChart.current)
  }, [])

  return (
    <div
      ref={myChart}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  )
}