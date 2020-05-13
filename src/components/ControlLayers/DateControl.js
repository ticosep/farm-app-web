import React from "react";
import styled from "styled-components";

const ControlWrapper = styled.div`
  display: flex;
  text-align: left;
`;

const StyledLabel = styled.span`
  margin-right: 1rem;
  min-width: 35px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;
`;
const DateControl = ({ startDate = "", endDate = "", setDates }) => {
  const [start, setStart] = React.useState(startDate);
  const [end, setEnd] = React.useState(endDate);

  React.useEffect(() => {
    setStart(startDate);
    setEnd(endDate);
  }, [startDate, endDate]);

  const handleStartChange = (e) => {
    setStart(e.target.value);
    setDates(e.target.value, end);
  };

  const handleEndChange = (e) => {
    setEnd(e.target.value);
    setDates(start, e.target.value);
  };

  return (
    <InputsWrapper>
      <ControlWrapper>
        <StyledLabel>De: </StyledLabel>
        <input
          type="date"
          value={start}
          id="start"
          onChange={handleStartChange}
        />
      </ControlWrapper>
      <ControlWrapper>
        <StyledLabel>Há: </StyledLabel>
        <input type="date" value={end} id="end" onChange={handleEndChange} />
      </ControlWrapper>
    </InputsWrapper>
  );
};

export default DateControl;
