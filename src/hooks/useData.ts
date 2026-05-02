import { useMemo } from "react";
import { data } from "../constants/json/data";
import { ExpandedStock } from "../models/Stock";
import { calculateScore, getNineMonthGrowth, getQuarterGrowth, getStatus } from "../utils/helpers";

export const useData = () => {
  const expandData = useMemo(() => {
    return data.map(d => ({
      ...d,
      q3_growth: getQuarterGrowth(d),
      nm_growth: getNineMonthGrowth(d),
      score: calculateScore(d),
      eps_category: getStatus(d) as ExpandedStock['eps_category'],
      pe: d.nav && d.nm_26 ? d.nav / d.nm_26 : null,
      peg:
        d.nav && d.nm_26 && d.q3_growth ? d.nav / (d.nm_26 * (1 + d.q3_growth)) : null
    }));
  }, []);

  return expandData;
}