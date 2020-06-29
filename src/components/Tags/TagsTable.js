import React from "react";

import FarmSelector from "../_shared/FarmSelector";
import UserContainer from "../_shared/UserContainer";
import { useTagStore } from "./_store/hooks/useTagStore";

const TagsTable = () => {
  const tagStore = useTagStore();
  const [currentFarm, setCurrentFarm] = React.useState(undefined);

  if (currentFarm) {
    tagStore.fetchTags(currentFarm);
  }

  return (
    <UserContainer>
      <FarmSelector setCurrentFarm={setCurrentFarm} />
    </UserContainer>
  );
};

export default TagsTable;
