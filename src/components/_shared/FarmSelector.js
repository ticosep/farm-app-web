import { Box, Select } from "grommet";
import { getSnapshot } from "mobx-state-tree";
import React from "react";

import { useFarms } from "../../stores/hooks/useUserStore";

const FarmSelector = ({ setCurrentFarm }) => {
  const farms = getSnapshot(useFarms());
  const [value, setValue] = React.useState(undefined);

  const handleSelect = (value) => {
    setValue(value);
    setCurrentFarm(+value);
  };

  return (
    <Select
      options={farms}
      value={value}
      placeholder="Fazendas"
      labelKey="name"
      plain
      valueLabel={
        <Box width="5rem" overflow="hidden" align="center">
          {value || "Fazendas"}
        </Box>
      }
      valueKey={{ key: "id", reduce: true }}
      onChange={({ value: nextValue }) => handleSelect(nextValue)}
    ></Select>
  );
};

export default FarmSelector;
