export interface ISingleContext {
  isLoading: any;
  setIsLoading: any;
  cities: any;
  weather: any;
  citiesError: any;
  weatherError: any;
}

export interface ICompareContext {
  data: any;
  setData: any;
  isLoading: any;
  setIsLoading: any;
  errorSearch: any;
  setErrorSearch: any;
  cities1: any;
  cities2: any;
  weather1: any;
  weather2: any;
  cities1Error: any;
  cities2Error: any;
}

export interface IFarContext {
  data: any;
  setData: any;
  error: any;
  setError: any;
}

export type CompareDataType = {
  weather1: any;
  weather2: any;
};

export type CitiesType = {
  cities1: CityType[];
  cities2: CityType[];
};

export type CityType = {
  lat: string;
  lon: string;
  name: string;
  state: string;
};

export type ForecastListItemType = {
  wind: any;
  clouds: any;
  main: any;
};

export type invalidInputType = {
  loc1?: string;
  loc2?: string;
  zip?: string;
  country?: string;
};

export type SearchLocationType = {
  setCities: (cities: CityType[]) => void;
};

export type CloudType = {
  src: string;
  text: string;
  link: string;
  alt: string;
  left: boolean;
};

export type DataType = {
  data: any;
};
