import React from "react";

const FindSingleCustomer = async (customerId) => {
  // console.log("fromUtility",customerId)
  try {
    const request = await fetch(
      `sweethomebackend-production.up.railway.app/api/v2/findSingleCustomer/${customerId}`
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
