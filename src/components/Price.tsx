import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Price() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
  fetchCoinHistory(coinId),
  {
    refetchInterval: 10000,
  }
);

const exceptData = data ?? []
const closeData = exceptData?.map((d) => d.close)
const openData = exceptData?.map((d) => d.open)

  
return (
  <div>
    {isLoading ? (
      "Loading chart..."
    ) : (
      <ApexChart
        type="bar"
        series= {[
          {
            name: 'closeData',
            data: closeData
          },
          {
            name: 'openData',
            data: openData
          }
        ]}
        options={{
          chart: {
            height: 700,
            width: 500,
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          grid: { show: false },
          yaxis: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            labels: { show: false },
          },         
        }}
      />
    )}
  </div>
);
}

export default Price;
