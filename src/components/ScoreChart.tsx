import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Stock } from '../models/Stock';

ChartJS.register(BarElement, CategoryScale, LinearScale);

interface Props {
  data: Stock[];
}

const ScoreChart: React.FC<Props> = ({ data }) => {
  const top = [...data].sort((a, b) => b.score - a.score).slice(0, 10);

  return (
    <div className='bg-slate-800 p-4 rounded'>
      <Bar
        data={{
          labels: top.map((d) => d.company),
          datasets: [
            {
              data: top.map((d) => d.score),
              backgroundColor: top.map((d) =>
                d.score > 2 ? '#22c55e' : d.score > 0.5 ? '#3b82f6' : '#f59e0b',
              ),
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
              grid: { color: '#1e293b' },
            },
            y: {
              ticks: { color: '#94a3b8', font: { size: 10 } },
              grid: { color: '#1e293b' },
            },
          },
        }}
      />
    </div>
  );
};

export default ScoreChart;
