import { useEffect, useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import DashboardContext from "../../context/dashboard/dashboardContext";

const OptionSelect = styled(Select)`
  color: black;
  width: 280px;
  padding-bottom: 10px;
`;

const Col = styled.div.attrs((props) => ({
  className: "col",
}))``;

interface Results {
  options: any;
  selectAction: any;
  selectName: string;
}

const SelectOption = ({ options, selectAction, selectName }: Results) => {
  const dashboardContext = useContext(DashboardContext);
  const { getRegions, citykey } = dashboardContext;

  const selectChange = (option: any) => {
    if (selectName !== "unit") {
      selectAction(option.value);
    } else {
      const metricFlag = (value: number) => {
        return value === 1 ? false : true;
      };
      selectAction(citykey, metricFlag(option.value));
    }
  };

  useEffect(() => {
    if (selectName === "region" && !options) {
      getRegions();
    }
    // eslint-disable-next-line
  }, [selectName, options]);

  var unitdefault = { value: 2, label: "Metric °C" };

  return (
    <Col>
      <OptionSelect
        defaultValue={selectName === "unit" && unitdefault}
        onChange={(value: any) => selectChange(value)}
        options={options}
        name={selectName}
        isSearchable={selectName === "unit" ? false : true}
        placeholder={`Search or select ${selectName}...`}
      />
    </Col>
  );
};

export default SelectOption;
