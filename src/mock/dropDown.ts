import { v4 as uuid } from "uuid";

export interface ISelectOptions {
  id: string;
  value: string;
  option: string;
}

export const CurrencyOptions: ISelectOptions[] = [
  {
    id: uuid(),
    value: "uah",
    option: "UAH",
  },
  {
    id: uuid(),
    value: "usd",
    option: "USD",
  },
  {
    id: uuid(),
    value: "eur",
    option: "EUR",
  },
];

export const CountryOptions: ISelectOptions[] = [
  {
    id: uuid(),
    value: "ukraine",
    option: "Україна",
  },
  {
    id: uuid(),
    value: "spain",
    option: "Іспанія",
  },
  {
    id: uuid(),
    value: "england",
    option: "Англія",
  },
  {
    id: uuid(),
    value: "poland",
    option: "Польща",
  },
];

export const RegionOptions: ISelectOptions[] = [
  {
    id: uuid(),
    value: "ternopil",
    option: "Тернопільська",
  },
  {
    id: uuid(),
    value: "kyiv",
    option: "Київська",
  },
  {
    id: uuid(),
    value: "poltava",
    option: "Полтавська",
  },
  {
    id: uuid(),
    value: "lviv",
    option: "Львівська",
  },
];
