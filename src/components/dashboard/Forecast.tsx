import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import styled from "styled-components";

const iconUrl = "https://developer.accuweather.com/sites/default/files/";

const Container = styled.div.attrs((props) => ({
  className: "container mt-5",
}))``;
const Row = styled.div.attrs((props) => ({
  className: "row",
}))`
  padding-top: 10px;
`;
const Col = styled.div.attrs((props) => ({
  className: "col small bg-secondary p-3 m-3 rounded",
}))``;
const H1 = styled.h1.attrs((props) => ({
  className: "h3",
}))``;
const Img = styled.img`
  height: 20px;
  width: 30px;
`;
const P = styled.p`
  font-size: 13px;
`;
const Day = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

interface Results {
  forecast: Array<object>;
  city: string;
}

const setUnit = (unit: string) => {
  switch (unit) {
    case "F":
      return "°F";
    case "C":
      return "°C";
    default:
      break;
  }
};

const Forecast = ({ forecast, city }: Results) => {
  return (
    <Container>
      {forecast.length === 0 ? (
        "No results found for your query. Please try a different search."
      ) : (
        <>
          <H1>Displaying 5 day forecast for {city}</H1>
          <Row>
            {forecast.map((day: any) => (
              <Col key={uuidv4()}>
                <Day>{moment(day.Date).format("dddd, ll")}</Day>
                <P>
                  High/Low - {day.Temperature.Maximum.Value}
                  {setUnit(day.Temperature.Maximum.Unit)}/
                  {day.Temperature.Minimum.Value}
                  {setUnit(day.Temperature.Minimum.Unit)}
                </P>
                <P>
                  Day - {day.Day.IconPhrase.substring(0, 11)} -{" "}
                  <Img
                    alt={day.Day.IconPhrase}
                    src={`${iconUrl}${day.Day.Icon < 10 ? 0 : ""}${
                      day.Day.Icon
                    }-s.png`}
                  />
                  <br />
                  Night - {day.Night.IconPhrase.substring(0, 11)} -{" "}
                  <Img
                    alt={day.Night.IconPhrase}
                    src={`${iconUrl}${day.Night.Icon < 10 ? 0 : ""}${
                      day.Night.Icon
                    }-s.png`}
                    sizes={`10px`}
                  />
                </P>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};
export default Forecast;
