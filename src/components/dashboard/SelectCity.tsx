import { useContext, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import DashboardContext from "../../context/dashboard/dashboardContext";

const Button = styled.button.attrs((props) => ({
  className: "btn btn-link btn-sm b-0",
}))``;

const Col = styled.div.attrs((props) => ({
  className: "col",
}))``;

interface Results {
  cities: Array<object>;
}

const SelectCity = ({ cities }: Results) => {
  const dashboardContext = useContext(DashboardContext);
  const { getCityForescast, setCurrentCity } = dashboardContext;

  return (
    <Col>
      {cities.length === 0 ? (
        "No results found. Please try another search."
      ) : (
        <>
          Please select a city:
          {cities.map((city: any) => (
            <Fragment key={uuidv4()}>
              <Button
                onClick={() => {
                  setCurrentCity(
                    `${city.LocalizedName}, ${city.AdministrativeArea.ID}`
                  );
                  getCityForescast(city.Key);
                }}
              >
                {city.LocalizedName}, {city.AdministrativeArea.ID}
              </Button>
            </Fragment>
          ))}
        </>
      )}
    </Col>
  );
};

export default SelectCity;
