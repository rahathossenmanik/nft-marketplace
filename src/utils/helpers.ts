import { Stock, FilterType } from '../models/Stock';

export const getStatus = (d: Stock): string => {
  if (d.score >= 1.5) return 'strong';
  if (d.q3_25 !== null && d.q3_25 < 0 && d.q3_26 !== null && d.q3_26 > 0)
    return 'turnaround';
  if (d.score > 0.2) return 'growth';
  if (d.score < -0.2) return 'declining';
  return 'stable';
};

export const filterData = (data: Stock[], filter: FilterType): Stock[] => {
  switch (filter) {
    case 'turnaround':
      return data.filter(
        d =>
          d.q3_25 !== null &&
          d.q3_25 < 0 &&
          d.q3_26 !== null &&
          d.q3_26 > 0,
      );

    case 'growth':
      return data.filter(d => d.score > 0.5);

    case 'profitable':
      return data.filter(
        d =>
          d.q3_26 !== null &&
          d.q3_26 > 0 &&
          d.nm_26 !== null &&
          d.nm_26 > 0,
      );

    case 'declining':
      return data.filter(d => d.score < -0.2);

    default:
      return data;
  }
};