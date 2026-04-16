import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import {Container} from "reactstrap";
import "../styles/Static.css";

const StaticGraf = ({product}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(product)
  }, [setProducts, product]);

  // Преобразование данных для диаграммы Pie Chart
  const getChartData = () => {
    const chartData = {};

    products.forEach((product) => {
      const directionName = product.direction_name.name;
      if (chartData[directionName]) {
        chartData[directionName]++;
      } else {
        chartData[directionName] = 1;
      }
    });

    const labels = Object.keys(chartData);
    const series = Object.values(chartData);

    return {
      labels,
      series,
    };
  };

  // Проверяем наличие данных перед вызовом getChartData()
  const chartData =
    products.length > 0 ? getChartData() : { labels: [], series: [] };

  const chartOptions = {
    labels: chartData.labels,
    legend: {
      show: true,
      position: "bottom",
    },
  };

  return (
    <div>
      <Container>
      <h1 className="chart-head">Статистика по институтам</h1>
        <div className="chart-static">
          <Chart
            options={chartOptions}
            series={chartData.series}
            type="pie"
            width="100%"
          />
        </div>
      </Container>
    </div>
  );
};

export default StaticGraf;
