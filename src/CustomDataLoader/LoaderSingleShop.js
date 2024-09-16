const LoaderSingleShop = () => {
  const allDataGather = async () => {
    const allShopDataUnwraped = await fetch(
      "https://sweethomebackend-production.up.railway.app/api/v2/allShopCollection"
    );
    console.log("from inner1", allShopDataUnwraped);

    const allShopData = await allShopDataUnwraped.json();
    console.log("from inner", allShopData);

    return allShopData;
  };
  const found = allDataGather();
  console.log("found", found);

  return found;
};

export default LoaderSingleShop;
