export interface Stock {
  sl: number;
  company: string;
  q3_26: number | null;
  q3_25: number | null;
  nm_26: number | null;
  nm_25: number | null;
  nav: number | null;
  q3_growth: number | null;
  nm_growth: number | null;
  score: number;
  comment?: string;
}

export interface ExpandedStock extends Stock {
  q3_growth: number | null;
  nm_growth: number | null;
  score: number;
  pe: number | null;
  peg: number | null;
  eps_category: 'turnaround' | 'strong' | 'growth' | 'declining' | 'junk';
  comment?: string;
}

export type FilterType =
  | 'all'
  | 'turnaround'
  | 'strong'
  | 'growth'
  | 'declining'
  | 'junk'
  ;