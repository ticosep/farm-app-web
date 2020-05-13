import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ControlDiv = styled.div`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  padding: ${(props) => (props.visible ? "1rem" : "0")};
`;

const StyledButton = styled.button`
  width: 36px;
  height: 36px;

  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  box-shadow: ${(props) =>
    props.visible ? "0" : "0 1px 5px rgba(0, 0, 0, 0.4)"};
  border-radius: 5px;
`;

const ControlButton = ({ children, defaultIcon, label = "" }) => {
  const [visible, setVisible] = React.useState(false);
  const icon = visible ? faTimesCircle : defaultIcon;

  return (
    <ControlDiv visible={visible}>
      <StyledButton
        visible={visible}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </StyledButton>
      {visible && <p>{label}</p>}
      {visible && children}
    </ControlDiv>
  );
};

export default ControlButton;
