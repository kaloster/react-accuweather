import { useContext } from "react";
import styled from "styled-components";
import SelectOption from "./SelectOption";
import CityFilter from "./CityFilter";
import SelectCity from "./SelectCity";
import DashboardContext from "../../context/dashboard/dashboardContext";
import Forecast from "./Forecast";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 1em;
`;

const Icon = styled.i.attrs((props) => ({
  className: "fa fa-sun pl-3 text text-warning",
}))``;

const Row = styled.div.attrs((props) => ({
  className: "row",
}))``;

const Dashboard = () => {
  const dashboardContext = useContext(DashboardContext);
  const {
    setCountry,
    getCountries,
    getCityForescast,
    regions,
    countries,
    country,
    cities,
    forecast,
    city,
  } = dashboardContext;

  var units = [
    { value: 1, label: "Farenheit °F" },
    { value: 2, label: "Metric °C" },
  ];

  return (
    <>
      <header className='App-header'>
        <Wrapper>
          <Title>
            React AccuWeather
            <Icon />
          </Title>
        </Wrapper>
        <Row>
          <SelectOption
            options={regions}
            selectAction={getCountries}
            selectName='region'
          />
          {countries && (
            <SelectOption
              options={countries}
              selectAction={setCountry}
              selectName='country'
            />
          )}
          {country && <CityFilter />}
          {cities && !forecast && <SelectCity cities={cities} />}
          {city && (
            <SelectOption
              options={units}
              selectAction={getCityForescast}
              selectName='unit'
            />
          )}
        </Row>
        {forecast && <Forecast forecast={forecast} city={city} />}
      </header>
    </>
  );
};

export default Dashboard;
