export interface ISingleContext {
  data: any;
  setData: any;
  error: any;
  setError: any;
  isLoading: any;
  setIsLoading: any;
  errorSearch: any;
  setErrorSearch: any;
  searchParams: any;
  setSearchParams: any;
}

export interface ICompareContext {
  data: any;
  setData: any;
  error: any;
  setError: any;
  isLoading: any;
  setIsLoading: any;
  errorSearch: any;
  setErrorSearch: any;
  searchParams: any;
  setSearchParams: any;
  cities: any;
  setCities: any;
  location1: any;
  setLocation1: any;
  location2: any;
  setLocation2: any;
}

export interface IFarContext {
  data: any;
  setData: any;
  error: any;
  setError: any;
}

export type CompareDataType = {
  forecast1: any;
  forecast2: any;
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
