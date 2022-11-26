import React from "react";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Icon,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Pizza Palace",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg",
    ],
    address = "100 Random St",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={50}>
      <Card.Content>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              <Spacer position="left" size="large">
                {isClosedTemporarily && (
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                )}
              </Spacer>
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};
