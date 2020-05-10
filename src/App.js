import React from "react";
import {
  useReportStore,
  useIsReportInitialized,
} from "./stores/hooks/useReportStore";
import "./App.css";
import {
  usePlagueStore,
  useIsPlagueInitialized,
} from "./stores/hooks/usePlagueStore";

import { Map, Marker, TileLayer, LayersControl } from "react-leaflet";
import { GOOGLE_MAP_API_KEY } from "./config";

const MAP_TYPE = "satellite";
const COORDS_DELTA = 0.002;

function App() {
  // Use the report store
  const reportStore = useReportStore();
  const plagueStore = usePlagueStore();

  const storedReports = reportStore.getReports();
  const [reports, setReports] = React.useState([...storedReports]);

  const reportInitialized = useIsReportInitialized();
  const plagueInitialized = useIsPlagueInitialized();

  if (!reportInitialized && !plagueInitialized) {
    return <div>Carregando...</div>;
  }

  return (
    <Map center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}

export default App;
