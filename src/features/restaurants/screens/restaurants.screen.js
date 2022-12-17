import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { NavigationContainer } from "@react-navigation/native";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -75px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  console.log("navigation: " + JSON.stringify(navigation));
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading>
            <ActivityIndicator
              size={100}
              animating={true}
              color={MD2Colors.red800}
            />
          </Loading>
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate("RestaurantGareth")}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
