import { mocks } from "./mock";

export const restaurantRequest = (location = "51.219448,4.402464") => {
  //   console.log(mocks[location].results[40].name);
  return new Promise((resolve, reject) => {
    const mock = mocks[location].results[0].name;
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

restaurantRequest()
  .then((result) => {
    console.log("Promise says: " + result);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
