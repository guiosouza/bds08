export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type StoreSelectOptions = {
  value: number;
  label: string;
};

export type Store = {
  id: number;
  name: string;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type FilterData = {
  store?: Store;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
