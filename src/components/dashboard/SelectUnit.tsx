import { useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import DashboardContext from "../../context/dashboard/dashboardContext";

const UnitSelect = styled(Select)`
  color: black;
  width: 280px;
  padding-bottom: 10px;
  z-index: 1000;
`;

const SelectUnit = () => {
  const dashboardContext = useContext(DashboardContext);
  const { getCityForescast, citykey } = dashboardContext;

  const selectChange = (unit: any) => {
    console.log(unit);

    switch (unit.value) {
      case 1:
        getCityForescast(citykey, false);
        break;
      default:
        getCityForescast(citykey, true);
    }
  };

  var options = [
    { value: 1, label: "Farenheit" },
    { value: 2, label: "Metric" },
  ];
  return (
    <>
      <UnitSelect
        defaultValue={{ value: 2, label: "Metric" }}
        onChange={(value: number) => selectChange(value)}
        options={options}
        name='units'
      />
    </>
  );
};

export default SelectUnit;
