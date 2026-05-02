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
            },
          ],
        }}
        options={{
          responsive: true,
          indexAxis: 'y',
        }}
      />
    </div>
  );
};

export default ScoreChart;
