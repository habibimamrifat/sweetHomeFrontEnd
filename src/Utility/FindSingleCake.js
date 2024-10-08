const FindSingleCake = async (cakeId) => {
  // console.log("fromUtility",cakeId)
  try {
    const request = await fetch(
      `https://sweethomebackend-production.up.railway.app/api/v2/findASingleCake/${cakeId}`
    );
    if (request.ok) {
      const singleCake = request.json();
      return singleCake;
    }
  } catch (error) {
    return { message: "single cake utility Problem", error };
  }
};

export default FindSingleCake;
