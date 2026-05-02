import { useState } from 'react';

type Direction = 'asc' | 'desc';

export const useSort = <T extends Record<string, any>>(initialKey: keyof T) => {
  const [sortKey, setSortKey] = useState<keyof T>(initialKey);
  const [direction, setDirection] = useState<Direction>('desc');

  const handleSort = (key: keyof T) => {
    if (key === sortKey) {
      setDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setDirection('desc');
    }
  };

  const sortData = (data: T[]): T[] => {
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];

      // null/undefined handling
      if (av == null) return 1;
      if (bv == null) return -1;

      // string sort
      if (typeof av === 'string' && typeof bv === 'string') {
        return direction === 'asc'
          ? av.localeCompare(bv)
          : bv.localeCompare(av);
      }

      // number sort
      return direction === 'asc' ? av - bv : bv - av;
    });
  };

  return { sortKey, direction, handleSort, sortData };
};