import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const SomeText = styled(Text)``;

export const MapCallout = ({ restaurant }) => {
  return (
    <View>
      <SomeText>{restaurant.name}</SomeText>
    </View>
  );
};
