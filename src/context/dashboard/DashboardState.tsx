import { useReducer } from "react";
import axios from "axios";
import { baseUrl, apikey } from "../../config/const";
import dashboardReducer from "./dashboardReducer";
import DashboardContext from "./dashboardContext";

import {
  GET_REGIONS,
  GET_COUNTRIES,
  SET_ERROR,
  SET_COUNTRY,
  GET_CITIES,
  GET_CITY_FORECAST,
  SET_CITY,
  SET_CITY_KEY,
} from "../types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const setOptions = (options: any) => {
  var listOptions = [];
  for (var key in options) {
    var listOption: any = {};
    listOption["value"] = options[key].ID;
    listOption["label"] = options[key].EnglishName;
    listOptions.push(listOption);
  }
  return listOptions;
};

const DashboardState = (props: any) => {
  const initialState = {
    regions: null,
    countries: null,
    country: null,
    forecast: null,
    citykey: null,
    city: null,
    cities: null,
    metric: true,
    error: null,
  };
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  // get all regions
  const getRegions = async (): Promise<any> => {
    try {
      const res = await axios.get(
        `${baseUrl}/locations/v1/regions?apikey=${apikey}`,
        config
      );
      dispatch({
        type: GET_REGIONS,
        payload: setOptions(res.data),
      });
    } catch (err: any) {
      dispatch({ type: SET_ERROR, payload: err.response.data });
    }
  };

  // get all countries per region
  const getCountries = async (code: string): Promise<any> => {
    try {
      const res = await axios.get(
        `${baseUrl}/locations/v1/countries/${code}?apikey=${apikey}`,
        config
      );
      dispatch({
        type: GET_COUNTRIES,
        payload: setOptions(res.data),
      });
    } catch (err: any) {
      dispatch({ type: SET_ERROR, payload: err.response.data });
    }
  };

  // set city search param
  const setCountry = (country: object) => {
    dispatch({
      type: SET_COUNTRY,
      payload: country,
    });
  };

  // get cities
  const getCities = async (citysearch: string): Promise<any> => {
    try {
      const res = await axios.get(
        `${baseUrl}/locations/v1/cities/${state.country}/search?q=${citysearch}&apikey=${apikey}`,
        config
      );
      dispatch({
        type: GET_CITIES,
        payload: res.data,
      });
    } catch (err: any) {
      dispatch({ type: SET_ERROR, payload: err.response });
    }
  };

  // set current city
  const setCurrentCity = (city: string) => {
    dispatch({
      type: SET_CITY,
      payload: city,
    });
  };

  // get 5 days forecast
  const getCityForescast = async (
    citykey: string,
    metric: boolean = true
  ): Promise<any> => {
    try {
      const res = await axios.get(
        `${baseUrl}/forecasts/v1/daily/5day/${citykey}?apikey=${apikey}&metric=${metric}`,
        config
      );
      dispatch({
        type: GET_CITY_FORECAST,
        payload: res.data.DailyForecasts,
      });
      dispatch({
        type: SET_CITY_KEY,
        payload: citykey,
      });
    } catch (err: any) {
      dispatch({ type: SET_ERROR, payload: err.response });
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        regions: state.regions,
        countries: state.countries,
        country: state.country,
        city: state.city,
        citykey: state.citykey,
        cities: state.cities,
        forecast: state.forecast,
        metric: state.metric,
        error: state.error,
        getCityForescast,
        getRegions,
        getCountries,
        setCountry,
        getCities,
        setCurrentCity,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
