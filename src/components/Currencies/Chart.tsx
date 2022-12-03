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
  symbol: string;
}

export const Chart = ({ currency, symbol }: IChartProps) => {
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
        label: symbol,
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(99, 102, 241)",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
      },
    ],
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <Line options={{ responsive: true }} data={data} />
    </div>
  );
};

export default Chart;
