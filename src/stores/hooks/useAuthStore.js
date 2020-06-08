import AuthStore from "../AuthStore";
import { useObserver } from "mobx-react";

export const useAuthStore = () => AuthStore;

export const useAuthorized = () => {
  const authStore = useAuthStore();

  return useObserver(() => authStore.isAuthorized);
};
