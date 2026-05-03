import { useData } from '../../hooks/useData';
import SingleGrowthChart from './SingleGrowthChart';

const GrowthCharts = () => {
  const data = useData();

  return (
    <>
      <div className='bg-slate-800 p-4 rounded'>
        <h2 className='text-lg font-semibold mb-3 col-span-full'>
          Top 10 Stocks by Q3 2026 Growth
        </h2>
        <SingleGrowthChart
          data={data}
          sortByKey='q3_growth'
          dataset1Key='q3_26'
          dataset2Key='q3_25'
        />
      </div>

      <div className='bg-slate-800 p-4 rounded'>
        <h2 className='text-lg font-semibold mb-3 col-span-full'>
          Top 10 Stocks by 9M 2026 Growth
        </h2>
        <SingleGrowthChart
          data={data}
          sortByKey='nm_growth'
          dataset1Key='nm_26'
          dataset2Key='nm_25'
        />
      </div>
    </>
  );
};

export default GrowthCharts;
