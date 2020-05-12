import React from "react";
import styled from "styled-components";
import { withLeaflet, Layer } from "react-leaflet";

const ControlWrapper = styled.div`
  display: flex;
`;
const DateControl = ({ startDate, endDate, setDates }) => {
  const [start, setStart] = React.useState(startDate);
  const [end, setEnd] = React.useState(endDate);

  React.useEffect(() => {
    setStart(startDate);
    setEnd(endDate);
  }, [startDate, endDate]);

  const handleStartChange = (e) => {
    console.log(e);
  };

  const handleEndChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <ControlWrapper>
        <span>Inicio: </span>
        <input type="date" id="start" onChange={handleStartChange} />
      </ControlWrapper>
      <ControlWrapper>
        <span>Fim: </span>
        <input type="date" id="end" onChange={handleEndChange} />
      </ControlWrapper>
    </div>
  );
};

export default withLeaflet(DateControl);
