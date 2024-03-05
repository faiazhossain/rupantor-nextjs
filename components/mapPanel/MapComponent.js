import * as React from "react";
import Map from "react-map-gl/maplibre";

const MapComponent = () => {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: 90.379,
          latitude: 23.762,
          zoom: 14,
        }}
        style={{ marginLeft: "20px", width: "96%", height: "97vh" }}
        mapStyle="https://tiles.barikoimaps.dev/styles/barkoi_green/style.json"
      />
    </div>
  );
};

export default MapComponent;
