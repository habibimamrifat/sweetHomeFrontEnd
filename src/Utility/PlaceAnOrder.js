const PlaceAnOrder = async (orderData) => {
  console.log("danggg", orderData);
  try {
    const request = await fetch(
      "https://sweet-home-back-69klmy8j5-habib-imams-projects.vercel.app/customer/createAnOrder",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }
    );
    if (request.ok) {
      const result = await request.json();
      // console.log(result);
      return result;
    } else {
      console.log("faild fetching");
    }
  } catch (error) {
    console.log("faild");
    // return { message: "coudnt connect to order collection", error };
  }
};

export default PlaceAnOrder;
