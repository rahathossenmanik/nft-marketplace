import { Stock, FilterType } from '../models/Stock';


/* ------------------ Helpers ------------------ */

const isValid = (d: Stock) =>
  d.q3_26 != null &&
  d.q3_25 != null &&
  d.nm_26 != null &&
  d.nm_25 != null;

/* ------------------ Core Conditions ------------------ */

// Loss → Profit in both periods
export const isTurnaround = (d: Stock): boolean => {
  if (!isValid(d)) return false;

  return (
    d.q3_25! < 0 &&
    d.q3_26! > 0 &&
    d.nm_25! < 0 &&
    d.nm_26! > 0
  );
};

// Strong = profitable + growth in both Q3 & 9M
export const isStrong = (d: Stock): boolean => {
  if (!isValid(d)) return false;

  return (
    d.q3_26! > 0 &&
    d.nm_26! > 0 &&
    d.q3_26! > d.q3_25! &&
    d.nm_26! > d.nm_25!
  );
};

// Growth = improvement in at least one period
export const isGrowth = (d: Stock): boolean => {
  if (!isValid(d)) return false;

  return (
    d.q3_26! > d.q3_25! ||
    d.nm_26! > d.nm_25!
  );
};

// Declining = still profit but decreasing
export const isDeclining = (d: Stock): boolean => {
  if (!isValid(d)) return false;

  return (
    d.q3_26! > 0 &&
    d.nm_26! > 0 &&
    (d.q3_26! < d.q3_25! || d.nm_26! < d.nm_25!)
  );
};

// Junk = persistent loss or worsening loss
export const isJunk = (d: Stock): boolean => {
  if (!isValid(d)) return false;

  return (
    d.q3_26! < 0 &&
    d.nm_26! < 0 &&
    (d.q3_26! <= d.q3_25! || d.nm_26! <= d.nm_25!)
  );
};
export const getStatus = (d: Stock): string => {
  if (!isValid(d)) return 'unknown';

  if (isTurnaround(d)) return 'turnaround';
  if (isStrong(d)) return 'strong';
  if (isGrowth(d)) return 'growth';
  if (isDeclining(d)) return 'declining';
  if (isJunk(d)) return 'junk';

  return 'unknown'; // fallback
};

export const statusBadgeClass = (status: string) => {
  switch (status) {
    case 'turnaround':
      return 'bg-yellow-400 text-gray-900';

    case 'strong':
      return 'bg-green-600 text-white';

    case 'growth':
      return 'bg-blue-600 text-white';

    case 'declining':
      return 'bg-red-400 text-white';

    case 'junk':
      return 'bg-red-700 text-white';

    default:
      return 'bg-gray-400 text-white';
  }
};

export const filterData = (
  data: Stock[],
  filter: FilterType,
): Stock[] => {
  if (filter === 'all') return data;

  return data.filter(d => getStatus(d) === filter);
};

export const getQuarterGrowth = (d: Stock): number | null => {
  if (d.q3_26 == null || d.q3_25 == null) return null;

  if (d.q3_25 === 0) return null; // avoid division by zero

  return ((d.q3_26 - d.q3_25) / Math.abs(d.q3_25));
};

export const getNineMonthGrowth = (d: Stock): number | null => {
  if (d.nm_26 == null || d.nm_25 == null) return null;

  if (d.nm_25 === 0) return null;

  return ((d.nm_26 - d.nm_25) / Math.abs(d.nm_25));
};

export const calculateScore = (d: Stock): number => {
  const q3_growth = getQuarterGrowth(d);
  const nm_growth = getNineMonthGrowth(d);

  // 6x weight to Q3 growth and 4x weight to 9M growth
  const q3_score = q3_growth ? q3_growth * 6 : 0;
  const nm_score = nm_growth ? nm_growth * 4 : 0;

  return (q3_score + nm_score) / 10; // normalize to 10
};