const FindSingleCake = async (cakeId) => {
  // console.log("fromUtility",cakeId)
  try {
    const request = await fetch(
      `https://sweet-home-back-69klmy8j5-habib-imams-projects.vercel.app/findASingleCake/${cakeId}`
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
