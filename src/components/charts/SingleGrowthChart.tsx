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
  sortByKey: 'q3_growth' | 'nm_growth';
  dataset1Key: 'q3_26' | 'nm_26';
  dataset2Key: 'q3_25' | 'nm_25';
}

const SingleGrowthChart: React.FC<Props> = ({
  data,
  sortByKey,
  dataset1Key,
  dataset2Key,
}) => {
  const top = sortBy(data, sortByKey, 'desc').slice(0, 10);

  return (
    <Bar
      data={{
        labels: top.map((d) => d.company),
        datasets: [
          {
            label: 'Current Year',
            data: top.map((d) => d[dataset1Key]),
            backgroundColor: '#1b8364',
            borderRadius: 4,
          },
          {
            label: 'Previous Year',
            data: top.map((d) => d[dataset2Key]),
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

export default SingleGrowthChart;
