import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const CustomIcon = ({ color }) => {
  return (
    <div>
      <FontAwesomeIcon size="3x" icon={faMapMarkerAlt} color={color} />
    </div>
  );
};

export default CustomIcon;
