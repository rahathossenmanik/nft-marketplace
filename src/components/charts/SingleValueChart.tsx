import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Stock } from '../../models/Stock';
import { sortBy } from '../../utils/common';

ChartJS.register(BarElement, CategoryScale, LinearScale);

interface Props {
  data: Stock[];
  datKey: keyof Stock;
}

const SingleValueChart: React.FC<Props> = ({ data, datKey }) => {
  const top = sortBy(data, datKey, 'desc').slice(0, 10);

  return (
    <Bar
      data={{
        labels: top.map((d) => d.company),
        datasets: [
          {
            data: top.map((d) => d[datKey]),
            backgroundColor: '#1b8364',
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

export default SingleValueChart;
