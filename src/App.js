import React from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import {
  useReportStore,
  useIsReportInitialized,
} from "./stores/hooks/useReportStore";
import "./App.css";
import {
  usePlagueStore,
  useIsPlagueInitialized,
} from "./stores/hooks/usePlagueStore";

import { Map, Marker, TileLayer, LayersControl, Popup } from "react-leaflet";
import Control from "react-leaflet-control";
import GoogleLayer from "./components/GoogleLayer";
import { GOOGLE_MAP_API_KEY } from "./config";
import CustomIcon from "./components/CustomIcon";
import DateControl from "./components/ControlLayers/DateControl";

const key = GOOGLE_MAP_API_KEY;
const MAP_KEYS = {
  terrain: "TERRAIN",
  road: "ROADMAP",
  satellite: "SATELLITE",
  hydrid: "HYBRID",
};
const DEFAULT_ZOOM = 15;

function App() {
  // Use the report store
  const reportStore = useReportStore();
  const plagueStore = usePlagueStore();

  const storedReports = reportStore.getReports();
  const [reports, setReports] = React.useState([...storedReports]);

  React.useEffect(() => {
    setReports([...reportStore.getReports()]);
  }, [storedReports.length]);

  const reportInitialized = useIsReportInitialized();
  const plagueInitialized = useIsPlagueInitialized();

  if (!reportInitialized && !plagueInitialized) {
    return <div>Carregando...</div>;
  }

  let initialRegion = [0, 0];

  if (reports.length) {
    const { coords } = reports[0];
    const { longitude, latitude } = coords;
    initialRegion = [latitude, longitude];
  }

  return (
    <Map
      style={{ width: "100vw", height: "100vh" }}
      center={initialRegion}
      zoom={DEFAULT_ZOOM}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Google Maps Hydrid">
          <GoogleLayer
            googlekey={key}
            maptype={MAP_KEYS.hydrid}
            libraries={["geometry", "places"]}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="Google Maps Roads">
          <GoogleLayer googlekey={key} maptype={MAP_KEYS.road} />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Google Maps Terrain">
          <GoogleLayer googlekey={key} maptype={MAP_KEYS.terrain} />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Google Maps Satellite">
          <GoogleLayer googlekey={key} maptype={MAP_KEYS.satellite} />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Google Maps with Libraries">
          <GoogleLayer
            googlekey={key}
            maptype={MAP_KEYS.hydrid}
            libraries={["geometry", "places"]}
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <Control position="topright">
        <DateControl startDate="01-01-2019" endDate="01-01-2019" />
      </Control>
      {reports.map(({ coords, plague }, index) => {
        const { latitude, longitude } = coords;
        const { name, color } = plagueStore.getPlague(plague);

        const icon = L.divIcon({
          className: "custom-icon",
          html: ReactDOMServer.renderToString(<CustomIcon color={color} />),
        });

        return (
          <Marker key={index} icon={icon} position={[latitude, longitude]}>
            <Popup>{name}</Popup>
          </Marker>
        );
      })}
    </Map>
  );
}

export default App;
