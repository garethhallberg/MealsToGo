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
  const formattedRespponse = camelize(result);
  const { geometry = {} } = formattedRespponse.results[0];
  const { lat, long } = geometry.location;
  return { lat, long };
};
