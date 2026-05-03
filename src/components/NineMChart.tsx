import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Stock } from '../models/Stock';
import { sortBy } from '../utils/common';

ChartJS.register(BarElement, CategoryScale, LinearScale);

interface Props {
  data: Stock[];
}

const NineMChart: React.FC<Props> = ({ data }) => {
  const top = sortBy(data, 'nm_26', 'desc').slice(0, 10);

  return (
    <Bar
      data={{
        labels: top.map((d) => d.company),
        datasets: [
          {
            data: top.map((d) => d.nm_26),
            backgroundColor: '#22c55e',
            borderRadius: 4,
          },
          {
            data: top.map((d) => d.nm_25),
            backgroundColor: '#e3e3e3',
            borderRadius: 4,
          },
        ],
      }}
      options={{
        responsive: true,
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks: { color: '#94a3b8', font: { size: 10 } },
            grid: { color: '#0f172a' },
          },
          y: {
            ticks: { color: '#94a3b8', font: { size: 10 } },
            grid: { color: '#1e293b' },
          },
        },
      }}
    />
  );
};

export default NineMChart;
