import PlagueStore from "../PlagueStore";
import { useObserver } from "mobx-react";

export const usePlagueStore = () => PlagueStore;

export const useIsPlagueInitialized = () => {
  const store = usePlagueStore();

  return useObserver(() => store.initialized);
};

export const useIsLoading = () => {
  const store = usePlagueStore();

  return useObserver(() => store.loading);
};
