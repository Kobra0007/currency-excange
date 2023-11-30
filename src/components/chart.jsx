import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const Chart = ({ currencyRates, baseCurrency }) => {
  useEffect(() => {
    const root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout,
        maxTooltipDistance: 0
      })
    );

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    );

    xAxis.get("dateFormats")["day"] = "MM/dd";
    xAxis.get("periodChangeDateFormats")["day"] = "MMM";

    // Create series
    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: `Курс валюты ${baseCurrency}`,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {}),
        connect: false
      })
    );

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill")
        })
      });
    });

    series.strokes.template.set("strokeWidth", 2);

    series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
    series.data.setAll(currencyRates);

    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomXY",
      xAxis: xAxis
    }));

    xAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    yAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    return () => {
      if (root) {
        root.dispose();
      }
    }
  }, []);

  const chartdivStyle = {
    width: "100%", height: "500px", backgroundColor: '#ffffff'
  };

  return (
    <div id="chartdiv" style={chartdivStyle}></div>
  );
}

export default Chart;
