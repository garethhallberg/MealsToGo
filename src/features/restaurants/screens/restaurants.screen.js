import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const DATA = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
  { name: 10 },
  { name: 11 },
  { name: 12 },
  { name: 13 },
  { name: 14 },
  { name: 15 },
  { name: 16 },
  { name: 17 },
  { name: 18 },
  { name: 19 },
  { name: 20 },
  { name: 21 },
  { name: 22 },
  { name: 23 },
  { name: 24 },
  { name: 25 },
  { name: 26 },
  { name: 27 },
  { name: 28 },
  { name: 29 },
  { name: 30 },
  { name: 31 },
  { name: 32 },
  { name: 33 },
  { name: 34 },
  { name: 35 },
  { name: 36 },
  { name: 37 },
  { name: 38 },
  { name: 39 },
  { name: 30 },
];

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
        { name: 15 },
        { name: 16 },
        { name: 17 },
        { name: 18 },
        { name: 19 },
        { name: 20 },
        { name: 21 },
        { name: 22 },
        { name: 23 },
        { name: 24 },
        { name: 25 },
        { name: 26 },
        { name: 27 },
        { name: 28 },
        { name: 29 },
        { name: 30 },
        { name: 31 },
        { name: 32 },
        { name: 33 },
        { name: 34 },
        { name: 35 },
        { name: 36 },
        { name: 37 },
        { name: 38 },
        { name: 39 },
        { name: 40 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
