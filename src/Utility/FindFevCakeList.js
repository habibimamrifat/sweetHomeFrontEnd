import React from "react";

const FindFevCakeList = async (customerId) => {
  try {
    const findFevCakeList = await fetch(
      `https://sweet-home-backend.vercel.app/customerFaveCakeList/${customerId}`
    );
    const result = await findFevCakeList.json();
    // console.log(result)
    return result;
  } catch (error) {
    // console.log("went wrong",error)
    return error;
  }
};

export default FindFevCakeList;
