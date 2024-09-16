import React from "react";

const FindAllShopCakes = async (shopId) => {
  try {
    const request = await fetch(
      `https://sweethomebackend-production.up.railway.app/api/v2/bakerAllCakeCollection/${shopId}`
    );
    const result = await request.json();
    return result;
  } catch (error) {
    return {
      message: "something went wrong on clint finding single shop",
      error,
    };
  }
};

export default FindAllShopCakes;
