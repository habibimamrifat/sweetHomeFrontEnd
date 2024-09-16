import React from "react";

const FindSingleCustomer = async (customerId) => {
  // console.log("fromUtility",customerId)
  try {
    const request = await fetch(
      `https://sweet-home-backend.vercel.app/api/v2/findSingleCustomer/${customerId}`
    );
    if (request.ok) {
      const singleCustomer = request.json();
      return singleCustomer;
    }
  } catch (error) {
    return { message: "single cake utility Problem", error };
  }
};

export default FindSingleCustomer;
