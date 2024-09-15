import React from "react";

const FindSingleCustomer = async (customerId) => {
  // console.log("fromUtility",customerId)
  try {
    const request = await fetch(
      `https://sweet-home-back-69klmy8j5-habib-imams-projects.vercel.app/findSingleCustomer/${customerId}`
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
