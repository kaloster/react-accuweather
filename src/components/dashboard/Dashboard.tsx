import { useEffect, useContext } from "react";
import styled from "styled-components";
import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";
import CityFilter from "./CityFilter";
import SelectCity from "./SelectCity";

import DashboardContext from "../../context/dashboard/dashboardContext";
import Forecast from "./Forecast";
import SelectUnit from "./SelectUnit";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 1em;
`;

const Dashboard = () => {
  const dashboardContext = useContext(DashboardContext);
  const { getRegions, regions, countries, country, cities, forecast, city } =
    dashboardContext;

  useEffect(() => {
    getRegions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header className='App-header'>
        <Wrapper>
          <Title>React AccuWeather</Title>
        </Wrapper>
        {regions && <SelectRegion regions={regions} />}
        {countries && <SelectCountry countries={countries} />}
        {country && <CityFilter />}
        {cities && !forecast && <SelectCity cities={cities} />}
        {city && <SelectUnit />}
        {forecast && <Forecast forecast={forecast} city={city} />}
      </header>
    </>
  );
};

export default Dashboard;
