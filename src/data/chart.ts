interface IBar {
  name: string;
  طلا: number;
  نقره: number;
  برنز: number;

}
interface IPi {
  name: string;
  value: number;
}

export const dataBar: IBar[] = [
  {
    name: 'ایران',
    طلا: 4,
    نقره: 10,
    برنز: 4,
  },
  {
    name: 'آمریکا',
    طلا: 10,
    نقره: 8,
    برنز: 7,
  },
  {
    name: 'مکزیک',
    طلا: 6,
    نقره: 1,
    برنز: 4,
  },
];

export const dataPi: IPi[] = [
  { name: "آب", value: 710 },
  { name: "خاک", value: 290 },
];