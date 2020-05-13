import React from "react";
import styled from "styled-components";
import { withLeaflet } from "react-leaflet";

const ControlWrapper = styled.div`
  display: flex;
`;
const AccuracyControl = ({ accuracy, setAccuracy }) => {
  const [currentAccuracy, setCurrentAccuracy] = React.useState(accuracy);

  React.useEffect(() => {
    setCurrentAccuracy(accuracy);
  }, [accuracy]);

  const handleChange = (e) => {
    setCurrentAccuracy(e.target.value);
  };

  return (
    <div>
      <ControlWrapper>
        <span>Acuracia maxima: </span>
        <input
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

export default withLeaflet(AccuracyControl);
