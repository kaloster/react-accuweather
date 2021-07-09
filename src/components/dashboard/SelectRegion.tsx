import { useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import DashboardContext from "../../context/dashboard/dashboardContext";

const RegionSelect = styled(Select)`
  color: black;
  width: 280px;
  padding-bottom: 10px;
  z-index: 1000;
`;

interface Results {
  regions: any;
}

const SelectRegion = ({ regions }: Results) => {
  const dashboardContext = useContext(DashboardContext);
  const { getCountries } = dashboardContext;

  const selectChange = (region: any) => {
    getCountries(region.value);
  };

  return (
    <>
      <RegionSelect
        onChange={(value: any) => selectChange(value)}
        options={regions}
        name='regions'
        isSearchable
        placeholder='Search or select Region...'
      />
    </>
  );
};

export default SelectRegion;
