import { data } from '../constants/json/data';

import Summary from '../components/Summary';
import ScoreChart from '../components/ScoreChart';

const Dashboard: React.FC = () => {
  return (
    <div className='bg-slate-900 min-h-screen text-white p-4'>
      <Summary data={data} />

      <div className='grid md:grid-cols-2 gap-4 p-5'>
        <ScoreChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
