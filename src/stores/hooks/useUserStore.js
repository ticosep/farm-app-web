import { useObserver } from "mobx-react";

import UserStore from "../UserStore";

export const useUserStore = () => UserStore;

export const useUser = () => {
  const store = useUserStore();

  return useObserver(() => store.user);
};

export const useCurrentFarm = () => {
  const store = useUserStore();

  return useObserver(() => store.user.current_farm);
};

export const useFarms = () => {
  const store = useUserStore();

  return useObserver(() => store.farms);
};

export const useInitialized = () => {
  const store = useUserStore();

  return useObserver(() => store.initialized);
};

export const useAuthorized = () => {
  const store = useUserStore();

  return useObserver(() => store.isAuthorized);
};
