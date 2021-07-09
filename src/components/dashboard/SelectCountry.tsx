import { useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import DashboardContext from "../../context/dashboard/dashboardContext";

const CountrySelect = styled(Select)`
  color: black;
  width: 280px;
  padding-bottom: 10px;
  z-index: 1000;
`;

interface Results {
  countries: any;
}

const SelectCountry = ({ countries }: Results) => {
  const dashboardContext = useContext(DashboardContext);
  const { setCountry } = dashboardContext;

  const selectChange = (country: any) => {
    setCountry(country.value);
  };

  return (
    <>
      <CountrySelect
        onChange={(value: any) => selectChange(value)}
        options={countries}
        name='countries'
        isSearchable
      />
    </>
  );
};

export default SelectCountry;
