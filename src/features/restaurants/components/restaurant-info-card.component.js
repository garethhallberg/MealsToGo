import React from "react";
import { View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.title};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[0]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
`;

const Address = styled(Paragraph)`
  color: ${(props) => props.theme.colors.ui.secondary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Rating = styled(Paragraph)`
  color: ${(props) => props.theme.colors.ui.secondary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
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
        <Info>
          <Title>{name}</Title>
          <SvgXml xml={star} width={20} height={20} />
          <SvgXml xml={star} width={20} height={20} />
          <SvgXml xml={star} width={20} height={20} />
          <Address>{address}</Address>
          <Rating>Rating {rating} stars</Rating>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};
