import React, { useContext, useState } from "react";
import styled from "styled-components";
import DashboardContext from "../../context/dashboard/dashboardContext";

const Button = styled.button.attrs((props) => ({
  className: "btn btn-primary btn-lg b-0",
}))``;

const Input = styled.input.attrs((props) => ({
  className: "form-control-lg flex-stretch input-group-prepend border-gray",
  type: "text",
  size: "1em",
}))``;

const Wrapper = styled.div.attrs((props) => ({
  className: "input-group input-group-lg",
}))`
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div.attrs((props) => ({
  className: "input-group-append",
}))``;

const CityFilter = () => {
  const dashboardContext = useContext(DashboardContext);
  const { getCities } = dashboardContext;
  const [citysearch, setCity] = useState({});

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getCities(citysearch);
  };

  return (
    <>
      <form>
        <Wrapper>
          <Input
            placeholder='Search...'
            value={Object.keys(citysearch).length === 0 ? "" : citysearch}
            name='city'
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
              setCity(ev.target.value)
            }
          />
          <ButtonWrapper>
            <Button
              onClick={(e) => {
                onClick(e);
              }}
            >
              <i className='fa fa-search' />
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </form>
    </>
  );
};

export default CityFilter;
