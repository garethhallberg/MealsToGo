import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled(View)`
  padding: 6px;
`;

const RestaurantList = styled(View)`
  padding: 26px;
  flex: 1;
  background-color: white;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList>
      <RestaurantInfoCard />
    </RestaurantList>
  </SafeArea>
);
