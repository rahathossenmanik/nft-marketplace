import { FilterType } from '../models/Stock';

interface Props {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
  topN: number;
  setTopN: (n: number) => void;
}

const Controls: React.FC<Props> = ({ filter, setFilter, topN, setTopN }) => {
  const btn = (key: FilterType, label: string) => (
    <button
      onClick={() => setFilter(key)}
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        filter === key
          ? 'bg-blue-600 text-white'
          : 'bg-slate-800 text-slate-400'
      }`}>
      {label}
    </button>
  );

  return (
    <div className='flex flex-wrap gap-3 p-5 border-b border-slate-800'>
      {btn('all', 'All')}
      {btn('turnaround', 'Turnaround')}
      {btn('growth', 'Growth')}
      {btn('profitable', 'Profitable')}
      {btn('declining', 'Declining')}

      <div className='ml-auto'>
        <select
          value={topN}
          onChange={(e) => setTopN(Number(e.target.value))}
          className='bg-slate-800 border border-slate-700 px-2 py-1 rounded'>
          <option value={20}>Top 20</option>
          <option value={50}>Top 50</option>
          <option value={97}>All</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
