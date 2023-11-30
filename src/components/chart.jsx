import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// const data = [{
//   date: new Date(2021, 0, 1).getTime(),
//   value: 100
// }, {
//   date: new Date(2021, 0, 2).getTime(),
//   value: 320
// }, {
//   date: new Date(2021, 0, 3).getTime(),
//   value: 270
// }, {
//   date: new Date(2021, 0, 4).getTime(),
//   value: 150
// }, {
//   date: new Date(2021, 0, 5).getTime(),
//   value: 156
// }, {
//   date: new Date(2021, 0, 6).getTime(),
//   value: 199
// }, {
//   date: new Date(2021, 0, 7).getTime(),
//   value: 114
// }, {
//   date: new Date(2021, 0, 8).getTime(),
//   value: 320
// }, {
//   date: new Date(2021, 0, 9).getTime(),
//   value: 90
// }, {
//   date: new Date(2021, 0, 10).getTime(),
//   value: 300
//   }, {
//   date: new Date(2021, 0, 11).getTime(),
//   value: 150
// }, {
//   date: new Date(2021, 0, 12).getTime(),
//   value: 320
// }, {
//   date: new Date(2021, 0, 13).getTime(),
//   value: 185
// }, {
//   date: new Date(2021, 0, 14).getTime(),
//   value: 100
// }]

const Chart = () => {
  useEffect(() => {
    const root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    // Define data
    let data = [{
      category: "Research",
      value1: 1000,
      value2: 588
    }, {
      category: "Marketing",
      value1: 1200,
      value2: 1800
    }, {
      category: "Sales",
      value1: 850,
      value2: 1230
    }];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category"
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category"
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      // componentWillUnmount logic
      if (root) {
        root.dispose();
      }
    }
  }, []); // empty dependency array ensures the effect runs only once

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}

export default Chart;
