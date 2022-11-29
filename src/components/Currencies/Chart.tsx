import React from "react";
import useAxios from "../../hooks/useAxios";
import { ICoinHistoryResponse } from "../../interfaces/coingecko";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface IChartProps {
  currency: string;
}

export const Chart = ({ currency }: IChartProps) => {
  const { response } = useAxios(`coins/${currency}/market_chart?vs_currency=usd&days=7`);
  if (!response) {
    return <div>Loading...</div>;
  }
  const coinChartData = (response as ICoinHistoryResponse).prices.map((value) => ({
    x: value[0],
    y: value[1],
  }));
  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("DD MMM")),
    datasets: [
      {
        fill: true,
        label: "",
        data: coinChartData.map((val) => val.y),
        borderColor: "rgb(99, 102, 241",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
      },
    ],
  };
  return <Line options={{ responsive: true }} data={data} />;
};

export default Chart;
