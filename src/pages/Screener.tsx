import { useMemo, useState } from 'react';
import { data } from '../constants/json/data';
import { filterData } from '../utils/helpers';
import { FilterType, Stock } from '../models/Stock';
import { useSort } from '../hooks/useSort';

import Controls from '../components/Controls';
import DataTable from '../components/DataTable';

const Screener: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [topN, setTopN] = useState<number>(20);
  const { sortKey, direction, handleSort, sortData } = useSort<Stock>('score');

  const processedData = useMemo(() => {
    const filtered = filterData(data, filter);
    const sorted = sortData(filtered);
    return sorted.slice(0, topN);
  }, [filter, topN, sortData]);

  return (
    <div className='bg-slate-900 min-h-screen text-white p-4'>
      <Controls {...{ filter, setFilter, topN, setTopN }} />

      <DataTable
        data={processedData}
        sortKey={sortKey}
        direction={direction}
        handleSort={handleSort}
      />
    </div>
  );
};

export default Screener;
