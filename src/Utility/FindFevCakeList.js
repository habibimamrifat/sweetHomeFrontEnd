import React from "react";

const FindFevCakeList = async (customerId) => {
  try {
    const findFevCakeList = await fetch(
      `https://sweethomebackend-production.up.railway.app/api/v2/customerFaveCakeList/${customerId}`
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
