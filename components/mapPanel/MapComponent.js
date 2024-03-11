import { Image } from "antd";
import * as React from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import { useAppSelector } from "../../redux/store";
import "maplibre-gl/dist/maplibre-gl.css";
import "animate.css";
const MapComponent = () => {
  const rupantorData = useAppSelector(
    (state) => state?.map?.rupantorData ?? null
  );
  return (
    <Map
      id="myMapA"
      initialViewState={{
        longitude: 90.379,
        latitude: 23.762,
        zoom: 14,
      }}
      style={{
        // marginLeft: "20px",
        width: "98%",
        height: "82vh",
        marginTop: "30px",
      }}
      mapStyle="https://tiles.barikoimaps.dev/styles/barkoi_green/style.json"
    >
      {rupantorData?.geocoded_address?.longitude && (
        <Marker
          longitude={rupantorData?.geocoded_address?.longitude}
          latitude={rupantorData?.geocoded_address?.latitude}
          anchor="bottom"
          style={{ zIndex: 99 }}
        >
          <Image
            src="/images/icon.png"
            alt=""
            width={50}
            height={50}
            preview={false}
            className="animate__animated animate__bounceIn animate__slow animate__delay-.5s"
            key={rupantorData?.geocoded_address?.longitude}
          />
        </Marker>
      )}
    </Map>
  );
};

export default MapComponent;
