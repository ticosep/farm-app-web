import { useObserver } from "mobx-react";

import UserStore from "../UserStore";

export const useUserStore = () => UserStore;

export const useCurrentFarm = () => {
  const store = useUserStore();

  return useObserver(() => store.user.current_farm);
};

export const useInitialized = () => {
  const store = useUserStore();

  return useObserver(() => store.initialized);
};

export const useAuthorized = () => {
  const store = useUserStore();

  return useObserver(() => store.isAuthorized);
};
