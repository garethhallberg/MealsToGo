import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
    };
  });
  console.log("mappedResults: " + mappedResults);
  return mappedResults;
};

restaurantRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(
      "Promise says: " + JSON.stringify(camelize(transformedResponse))
    );
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
