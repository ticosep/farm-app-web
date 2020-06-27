import React from "react";

import { Mapbox } from "../_shared/MapBox";

const NewFarmMap = ({ name, setValue, register }) => {
  React.useEffect(() => {
    register({ name });
  }, [name]);

  return (
    <Mapbox
      style="mapbox://styles/mapbox/satellite-streets-v11"
      containerStyle={{
        height: "300px",
        width: "400px",
      }}
      onClick={(map, e) => {
        console.log(e);
      }}
    ></Mapbox>
  );
};

export default NewFarmMap;
