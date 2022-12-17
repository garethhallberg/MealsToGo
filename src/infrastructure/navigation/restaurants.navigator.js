import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant.detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsStack"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantGareth"
        component={() => <Text>Hello Gareth</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
