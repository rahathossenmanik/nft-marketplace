import { useData } from '../../hooks/useData';
import SingleValueChart from './SingleValueChart';

const ValueCharts = () => {
  const data = useData();

  return (
    <>
      <div className='bg-slate-800 p-4 rounded'>
        <h2 className='text-lg font-semibold mb-3 col-span-full'>
          Top 10 Stocks by Score
        </h2>
        <SingleValueChart data={data} datKey='score' />
      </div>

      <div className='bg-slate-800 p-4 rounded'>
        <h2 className='text-lg font-semibold mb-3 col-span-full'>
          Top 10 Stocks by Quarter EPS
        </h2>
        <SingleValueChart data={data} datKey='q3_26' />
      </div>

      <div className='bg-slate-800 p-4 rounded'>
        <h2 className='text-lg font-semibold mb-3 col-span-full'>
          Top 10 Stocks by 9M EPS
        </h2>
        <SingleValueChart data={data} datKey='nm_26' />
      </div>
    </>
  );
};

export default ValueCharts;
