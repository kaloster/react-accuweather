import { createContext } from "react";

interface IContextProps {
  getRegions: any;
  regions: any;
  country: any;
  countries: any;
  getCountries: any;
  setCountry: any;
  city: string;
  citykey: string;
  cities: any;
  forecast: any;
  getCities: any;
  getCityForescast: any;
  setCurrentCity: any;
  metric: boolean;
  error: any;
  //   loading: any;
}

const dashboardContext = createContext({} as IContextProps);

export default dashboardContext;
