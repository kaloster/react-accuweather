import {
  GET_REGIONS,
  GET_COUNTRIES,
  SET_COUNTRY,
  GET_CITIES,
  GET_CITY_FORECAST,
  SET_ERROR,
  SET_CITY,
  SET_CITY_KEY,
} from "../types";

type Action = {
  type: string;
  payload: any;
};

const dashboardReducer = (state: any, action: Action) => {
  switch (action.type) {
    case GET_REGIONS:
      return {
        ...state,
        regions: action.payload,
        loading: false,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        loading: false,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
        forecast: null,
        loading: false,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
        loading: false,
      };
    case SET_CITY_KEY:
      return {
        ...state,
        citykey: action.payload,
        loading: false,
      };
    case GET_CITY_FORECAST:
      return {
        ...state,
        forecast: action.payload,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
