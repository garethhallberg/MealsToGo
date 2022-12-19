import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { LocationContext } from "../../services/location/location.context";

import { SearchMap } from "../components/search.component.map";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDeltaSum = northeastLat - southwestLat;
    setLatDelta(latDeltaSum);
  }, [location, viewport]);

  var markers = [
    {
      latitude: 37.7829132,
      longitude: -122.4188995,
      title: "Foo Place",
      subtitle: "1234 Foo Drive",
    },
  ];

  // return (
  //   <Map
  //     region={{
  //       latitude: lat,
  //       longitude: lng,
  //       latitudeDelta: latDelta,
  //       longitudeDelta: 0.02,
  //     }}
  //     annotations={markers}
  //   >
  //     <Marker
  //       coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
  //       title={"title"}
  //       description={"description"}
  //     />
  //   </Map>
  // );

  return (
    <>
      <SearchMap />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </>
  );
};
