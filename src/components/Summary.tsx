import { Stock } from '../models/Stock';

interface Props {
  data: Stock[];
}

const Summary: React.FC<Props> = ({ data }) => {
  const profitable = data.filter((d) => d.q3_26 && d.q3_26 > 0).length;
  const declining = data.filter((d) => d.score < -0.2).length;

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 p-5'>
      <Card label='Profitable' value={profitable} color='green' />
      <Card label='Declining' value={declining} color='red' />
    </div>
  );
};

const colorMap = {
  green: 'border-green-500',
  red: 'border-red-500',
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
