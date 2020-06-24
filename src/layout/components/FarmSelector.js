import { Box, Select } from "grommet";
import { getSnapshot } from "mobx-state-tree";
import React from "react";

import { useFarms, useUserStore } from "../../stores/hooks/useUserStore";

const FarmSelector = () => {
  const farms = getSnapshot(useFarms());
  const store = useUserStore();
  const [value, setValue] = React.useState(undefined);

  const handleSelect = (value) => {
    setValue(value);
    store.setCurrentFarm(+value);
  };

  return (
    <Select
      options={farms}
      value={value}
      placeholder="Fazenda"
      labelKey="name"
      plain
      valueLabel={
        <Box width="5rem" overflow="hidden" align="center">
          {value || "Fazenda"}
        </Box>
      }
      valueKey={{ key: "id", reduce: true }}
      onChange={({ value: nextValue }) => handleSelect(nextValue)}
    />
  );
};

export default FarmSelector;
