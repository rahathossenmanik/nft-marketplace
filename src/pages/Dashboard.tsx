import { data } from '../constants/json/data';

import Summary from '../components/Summary';
import ScoreChart from '../components/ScoreChart';
import QuarterChart from '../components/QuarterChart';
import NineMChart from '../components/NineMChart';
import GrowthCharts from '../components/charts/GrowthCharts';

const Dashboard: React.FC = () => {
  return (
    <div className='bg-slate-900 min-h-screen text-white p-4'>
      <Summary data={data} />

      <div className='grid md:grid-cols-2 gap-4 p-5'>
        <GrowthCharts />

        <div className='bg-slate-800 p-4 rounded'>
          <h2 className='text-lg font-semibold mb-3 col-span-full'>
            Top 10 Stocks by Score
          </h2>
          <ScoreChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
