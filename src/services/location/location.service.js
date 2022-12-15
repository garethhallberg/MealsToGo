import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  console.log("result: " + result);
  const formattedResponse = camelize(result);
  console.log("formattedResponse: " + JSON.stringify(formattedResponse));
  const { geometry = {} } = formattedResponse.results[0];
  console.log("geometry: " + JSON.stringify(geometry));
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
