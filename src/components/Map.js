import React from "react";
import { usePlagueStore } from "../stores/hooks/usePlagueStore";
import { useReportStore } from "../stores/hooks/useReportStore";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      id: "85ce12bb0808330e4b9ce570fecf9841",
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [
            [-0.3757490353995365, 51.56154581801749],
            [-0.29609815649368443, 51.552580677113696],
            [-0.31463758520476404, 51.53186871672611],
            [-0.3918852048335282, 51.5316551422662],
            [-0.3757490353995365, 51.56154581801749],
          ],
        ],
        type: "Polygon",
      },
    },
  ],
};

const Map = () => {
  // Use the report store
  const reportStore = useReportStore();
  const plagueStore = usePlagueStore();

  const storedReports = reportStore.getReports();
  const [reports, setReports] = React.useState([...storedReports]);

  React.useEffect(() => {
    setReports([...reportStore.getReports()]);
  }, [storedReports.length]);

  const Mapbox = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZWdpc3RvbmV0byIsImEiOiJja2I1ODI3ejYxMWsyMm9ueWY3anoxdmUyIn0.L-vKMOD8_oEhK6LJZocZaQ",
  });

  const handleDraw = (e) => {
    const str = JSON.stringify(e.features);
    console.log(str);
  };

  let polygonPaint = (ReactMapboxGl.FillPaint = {
    "fill-color": "#ff0000",
    "fill-opacity": 0.3,
  });

  return (
    <Mapbox
      style="mapbox://styles/mapbox/satellite-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <GeoJSONLayer fillPaint={polygonPaint} data={geojson} />
      <DrawControl onDrawCreate={handleDraw} />
    </Mapbox>
  );
};

export default Map;
