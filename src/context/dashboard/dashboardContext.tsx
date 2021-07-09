import { createContext } from "react";

interface IContextProps {
  getRegions: any;
  regions: Array<object>;
  country: object;
  countries: Array<object>;
  getCountries: any;
  setCountry: any;
  city: string;
  citykey: string;
  cities: Array<object>;
  forecast: Array<object>;
  getCities: any;
  getCityForescast: any;
  setCurrentCity: any;
  metric: boolean;
  error: any;
}

const dashboardContext = createContext({} as IContextProps);

export default dashboardContext;
