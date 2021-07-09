import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import DashboardContext from "../../context/dashboard/dashboardContext";

const Button = styled.button.attrs((props) => ({
  className: "btn btn-link btn-sm b-0",
}))``;

interface Results {
  cities: Array<object>;
}

const SelectCity = ({ cities }: Results) => {
  const dashboardContext = useContext(DashboardContext);
  const { getCityForescast, setCurrentCity } = dashboardContext;

  return (
    <>
      {cities.length === 0 ? (
        "No results found. Please try another search."
      ) : (
        <>
          Please select a city:
          {cities.map((city: any) => (
            <div key={uuidv4()}>
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
              <br />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SelectCity;
