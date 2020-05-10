import ReportStore from "../ReportStore";
import { useObserver } from "mobx-react";

export const useReportStore = () => ReportStore;

export const useIsReportInitialized = () => {
  const store = useReportStore();

  return useObserver(() => store.initialized);
};

export const useIsLoading = () => {
  const store = useReportStore();

  return useObserver(() => store.loading);
};
