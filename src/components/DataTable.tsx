import { Icon } from '@iconify/react';
import { Stock } from '../models/Stock';
import { getStatus, statusBadgeClass } from '../utils/helpers';
import { statusMap } from '../constants/common';

interface Props {
  data: Stock[];
  sortKey: keyof Stock;
  direction: 'asc' | 'desc';
  handleSort: (key: keyof Stock) => void;
}

const DataTable: React.FC<Props> = ({
  data,
  sortKey,
  direction,
  handleSort,
}) => {
  const arrow = (key: keyof Stock) => {
    if (sortKey !== key) return <Icon icon='fa:sort' />;
    return direction === 'asc' ? (
      <Icon icon='fa:sort-asc' />
    ) : (
      <Icon icon='fa:sort-desc' />
    );
  };

  return (
    <div className='p-5 overflow-auto'>
      <table className='w-full text-sm'>
        <thead className='text-slate-400 text-left'>
          <tr>
            <th className='py-2 px-3'>#</th>

            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('company')}>
              <span className='flex items-center justify-between gap-1'>
                Company {arrow('company')}
              </span>
            </th>

            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('q3_26')}>
              <span className='flex items-center justify-between gap-1'>
                Q3-26 {arrow('q3_26')}
              </span>
            </th>

            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('q3_25')}>
              <span className='flex items-center justify-between gap-1'>
                Q3-25 {arrow('q3_25')}
              </span>
            </th>

            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('nm_26')}>
              <span className='flex items-center justify-between gap-1'>
                9M EPS-26 {arrow('nm_26')}
              </span>
            </th>

            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('nm_25')}>
              <span className='flex items-center justify-between gap-1'>
                9M EPS-25 {arrow('nm_25')}
              </span>
            </th>

            {/* Quarter Growth */}
            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('q3_growth')}>
              <span className='flex items-center justify-between gap-1'>
                Q3 Growth % {arrow('q3_growth')}
              </span>
            </th>

            {/* 9M Growth */}
            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('nm_growth')}>
              <span className='flex items-center justify-between gap-1'>
                9M Growth % {arrow('nm_growth')}
              </span>
            </th>

            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('score')}>
              <span className='flex items-center justify-between gap-1'>
                Score {arrow('score')}
              </span>
            </th>

            <th
              className='cursor-pointer py-2 px-3'
              onClick={() => handleSort('score')}>
              <span className='flex items-center justify-between gap-1'>
                Status {arrow('score')}
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((d, i) => (
            <tr key={d.sl} className='border-t border-slate-800'>
              <td className='py-2 px-3'>{i + 1}</td>

              <td className='text-blue-400 font-semibold py-2 px-3'>
                {d.company}
              </td>

              <td
                className={`py-2 px-3 ${d.q3_26 && d.q3_26 > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {d.q3_26 ?? 'N/A'}
              </td>

              <td
                className={`py-2 px-3 ${d.q3_25 && d.q3_25 > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {d.q3_25 ?? 'N/A'}
              </td>

              <td
                className={`py-2 px-3 ${d.nm_26 && d.nm_26 > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {d.nm_26 ?? 'N/A'}
              </td>

              <td
                className={`py-2 px-3 ${d.nm_25 && d.nm_25 > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {d.nm_25 ?? 'N/A'}
              </td>

              <td
                className={`py-2 px-3 ${d.q3_growth !== null && d.q3_growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {d.q3_growth ? `${(d.q3_growth * 100).toFixed(2)}%` : 'N/A'}
              </td>

              <td
                className={`py-2 px-3 ${d.nm_growth !== null && d.nm_growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {d.nm_growth ? `${(d.nm_growth * 100).toFixed(2)}%` : 'N/A'}
              </td>

              <td
                className={`py-2 px-3 ${d.score >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {d.score.toFixed(2)}
              </td>

              {/* Convert below cell data into a badge */}
              <td className='py-2 px-3'>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${statusBadgeClass(
                    getStatus(d),
                  )}`}>
                  {statusMap[getStatus(d)]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
