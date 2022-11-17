import React from "react";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 0px;
  color: red;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
`;

const RestaurantCard = styled(Card)`
  padding: 2px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 2px;
  background-color: gray;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Pizza Palace",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg",
    ],
    address = "100 Random St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={50}>
      <Card.Content>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
        <Paragraph>Rating {rating} stars</Paragraph>
      </Card.Content>
    </RestaurantCard>
  );
};
