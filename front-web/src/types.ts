export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type StoreSelectOptions = {
  value: number;
  label: string;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};
