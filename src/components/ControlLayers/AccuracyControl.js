import React from "react";
import styled from "styled-components";

const ControlWrapper = styled.div`
  display: flex;
`;

const StyledLabel = styled.span`
  margin-right: 1rem;
  min-width: 35px;
`;

const AccuracyControl = ({ accuracy = 20, setAccuracy }) => {
  const [currentAccuracy, setCurrentAccuracy] = React.useState(accuracy);

  React.useEffect(() => {
    setCurrentAccuracy(accuracy);
  }, [accuracy]);

  const handleChange = (e) => {
    setCurrentAccuracy(e.target.value);
    setAccuracy(e.target.value);
  };

  return (
    <div>
      <ControlWrapper>
        <StyledLabel>Acuracia maxima: </StyledLabel>
        <input
          style={{ maxWidth: "50px" }}
          type="number"
          value={currentAccuracy}
          step={1}
          id="accuracy"
          onChange={handleChange}
        />
      </ControlWrapper>
    </div>
  );
};

export default AccuracyControl;
