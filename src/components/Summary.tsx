import { Stock } from '../models/Stock';
import { getStatus } from '../utils/helpers';

interface Props {
  data: Stock[];
}

const Summary: React.FC<Props> = ({ data }) => {
  const turnaround = data.filter((d) => getStatus(d) === 'turnaround').length;
  const strong = data.filter((d) => getStatus(d) === 'strong').length;
  const growth = data.filter((d) => getStatus(d) === 'growth').length;
  const declining = data.filter((d) => getStatus(d) === 'declining').length;
  const junk = data.filter((d) => getStatus(d) === 'junk').length;

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-5'>
      <Card label='Total' value={data.length} color='total' />
      <Card label='Turnaround' value={turnaround} color='yellow' />
      <Card label='Strong' value={strong} color='green' />
      <Card label='Growth' value={growth} color='blue' />
      <Card label='Declining' value={declining} color='red' />
      <Card label='Junk' value={junk} color='dark_red' />
    </div>
  );
};

const colorMap = {
  total: 'border-white',
  blue: 'border-blue-500',
  green: 'border-green-500',
  yellow: 'border-yellow-500',
  red: 'border-red-400',
  dark_red: 'border-red-700',
};

const Card = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: keyof typeof colorMap;
}) => (
  <div className={`bg-slate-800 p-4 rounded border-l-4 ${colorMap[color]}`}>
    <div className='text-xl font-bold'>{value}</div>
    <div className='text-xs text-slate-400'>{label}</div>
  </div>
);

export default Summary;
