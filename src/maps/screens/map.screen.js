import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { SearchMap } from "../components/search.component.map";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => (
  <>
    <SearchMap />
    <Map />
  </>
);
