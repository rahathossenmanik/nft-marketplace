import Summary from '../components/Summary';
import GrowthCharts from '../components/charts/GrowthCharts';
import { useData } from '../hooks/useData';
import ValueCharts from '../components/charts/ValueCharts';

const Dashboard: React.FC = () => {
  const data = useData();

  return (
    <div className='bg-slate-900 min-h-screen text-white p-4'>
      <Summary data={data} />

      <div className='grid md:grid-cols-2 gap-4 p-5'>
        <GrowthCharts />

        <ValueCharts />
      </div>
    </div>
  );
};

export default Dashboard;
