interface IDataLine {
  name: number;
  آمریکا: number;
  ایران: number;
}
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

export const DataLine: IDataLine[] = [
  {
    name: 2010,
    آمریکا: 5,
    ایران: 10,
  },
  {
    name: 2016,
    آمریکا: 5,
    ایران: 85,
  },
  {
    name: 2018,
    آمریکا: 5,
    ایران: 180,
  },
  {
    name: 2020,
    آمریکا: 8,
    ایران: 300,
  },
  {
    name: 2022,
    آمریکا: 10,
    ایران: 900,
  },
];

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