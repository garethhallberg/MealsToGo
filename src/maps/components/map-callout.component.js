import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";

const SomeText = styled(Text)``;

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
