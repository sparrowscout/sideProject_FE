import { atom } from 'recoil';

interface ChartDate {
  theDay?: string;
  firstDay?: string;
  lastDay?: string;
}

export const ChartDateState = atom<ChartDate>({
  key: 'ChartDateState',
  default: {},
});
