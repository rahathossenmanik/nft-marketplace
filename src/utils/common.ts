export const getDeadlineCountdown = (
  auctionDeadline: string
) => {
  const diff = new Date(auctionDeadline).getTime() - Date.now();

  if (diff <= 0) {
    return 'Ended';
  }

  return `${Math.floor(diff / (1000 * 60 * 60 * 24))}d ${Math.floor((diff / (1000 * 60 * 60)) % 24)}h ${Math.floor((diff / (1000 * 60)) % 60)}m ${Math.floor((diff / 1000) % 60)}s`;
};


type SortOrder = 'asc' | 'desc';

export const sortBy = <T>(
  data: T[],
  key: keyof T,
  order: SortOrder = 'asc',
  nullsLast: boolean = true
): T[] => {
  return [...data].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    const aNull = valA === null || valA === undefined;
    const bNull = valB === null || valB === undefined;

    // Handle nulls
    if (aNull && bNull) return 0;
    if (aNull) return nullsLast ? 1 : -1;
    if (bNull) return nullsLast ? -1 : 1;

    // Normal comparison
    if (valA < valB) return order === 'asc' ? -1 : 1;
    if (valA > valB) return order === 'asc' ? 1 : -1;

    return 0;
  });
};
