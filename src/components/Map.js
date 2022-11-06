import * as React from "react";
import { useState, useEffect, useMemo } from "react";

import ReactMapGL, { Marker } from "react-map-gl";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ lat, lng, zoom, eventData, theme, eventList, closedInfo, setClosedInfo }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [info, setInfo] = useState(null)
  const updateClosedInfo = setClosedInfo;

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: lat,
    longitude: lng,
    zoom: zoom,
  });

  const markers = useMemo(() => eventData.map((ev) => {
    if (eventList.includes(ev.categories[0].id)) {
      return (
        <Marker
          latitude={ev.geometry[0].coordinates[1]}
          longitude={ev.geometry[0].coordinates[0]}
        >
          <LocationMarker
            element={ev.categories[0].id}
            onClick={() => {
              setInfo({ id: ev.id, title: ev.title })


            }}
          />
        </Marker>
      );
    }
    return null;
  }), [eventData, eventList, updateClosedInfo]);

  useEffect(() => {
    if (info?.id !== locationInfo?.id || !locationInfo) {
      setLocationInfo(info);
      updateClosedInfo(false)
    }
    else {
      updateClosedInfo(prev => !prev)
    }
  }, [info])
  let mapStyle = "";
  if (theme) {
    mapStyle = "mapbox://styles/mapbox/dark-v10";
  }
  else {
    mapStyle = "mapbox://styles/mapbox/light-v10";
  }

  return (
    <div className="map">
      <ReactMapGL
        mapStyle={mapStyle}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZGV2c3ZhcnVuIiwiYSI6ImNsMHk1ZzUwMDBjeWwzam8xeHJiaGc3cmkifQ.vFYhJtxz0W9ubCrpZcraRg"
        }
        {...viewport}
        onViewportChange={nextViewport => setViewport({ ...nextViewport, height: "100%", width: "100%" })}
        onMove={evt => setViewport(evt.viewport)}
      >
        {markers}
      </ReactMapGL>
      {locationInfo && !closedInfo && <LocationInfoBox info={locationInfo} setClosedInfo={setClosedInfo} />}
    </div>
  );
};

Map.defaultProps = {
  lat: 37.7577,
  lng: -122.4376,
  zoom: 0,
};

export default Map;