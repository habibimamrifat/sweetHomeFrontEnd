import React from "react";

const FindSingleShop = async (shopId) => {
  try {
    const request = await fetch(
      `https://sweet-home-backend.vercel.app/baker/findSingleShop/${shopId}`
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

export default FindSingleShop;
